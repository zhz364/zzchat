const router = require('express').Router();
let User = require('../models/user.model');
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");

router.route('/').get((req,res) =>{
    User.find()
        .then(users => res.json(users))
        .catch(err => res.status(400).json('Error:' + err));
});

router.route('/add').post(async(req,res) => {
    try{
        const {username, password }= req.body;
        // Validations
        if(!username || !password){
            return res.status(400).json("Error: "+ "Please enter all required fields")
        }

        if(password.length < 6){
            return res.status(400).json("Error: "+ "Please enter a password of at least 6 characters")
        }

        const existingUser = await User.findOne({username:username})
        if (existingUser){
            return res.status(400).json("Error: "+ "An account with this User name already exists")
        }

        // hash the password
        const salt = await bcrypt.genSalt();
        const passwordHash = await bcrypt.hash(password, salt);

        // save user to database
        const newUser = new User({username,passwordHash});
        await newUser.save()
            .then(( )=> res.json("Successfuly Created a new User"))
        
        // token setup
        const token = jwt.sign({
            user: newUser._id
        }, process.env.JWT_SECRET);

        // send the token in a http-only cookie
        res.cookie("token",token, {
                httpOnly: true,
                useUnifiedTopology: true
        }).send();    

    }catch(err){
        res.status(400).json('Error: ' + err);
    }  
});

// login
router.route('/login').post(async(req,res) => {
    try{
        const {username, password} = req.body;
        // validate
        if(!username || !password){
            return res.status(400).json("Error: "+ "Please enter all required fields")
        }

        if(password.length < 6){
            return res.status(400).json("Error: "+ "Please enter a password of at least 6 characters")
        }

        const existingUser = await User.findOne({username});
        if (!existingUser){
            return res.status(401).json("Error: "+ "Wrong username or password")
        }
        const passwordCheck = await bcrypt.compare(password,existingUser.passwordHash);
        if(!passwordCheck){
            return res.status(401).json("Error: "+ "Wrong username or password")
        }

        // sign in token 
        const token = jwt.sign({
            user: existingUser._id
        }, process.env.JWT_SECRET);

        res.cookie("token",token, {
            httpOnly: true,
            useUnifiedTopology: true
        }).send();    
        console.log("logedin")
    }catch(err){
        res.status(400).json('Error: ' + err);
    }
});

router.route('/logout').get((req,res) => {
    res.cookie("token","",{
        httpOnly:true,
        expires: new Date(0),
        useUnifiedTopology: true
    })
        .send();
        console.log(req.body.username+" logout")
});
module.exports = router;