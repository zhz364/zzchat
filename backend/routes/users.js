const router = require('express').Router();
let User = require('../models/user.model');

router.route('/').get((req,res) =>{
    User.find()
        .then(users => res.json(users))
        .catch(err => res.status(400).json('Error:' + err));
});

router.route('/add').post(async(req,res) => {
    try{
        const {username, password }= req.body;
        const newUser = new User({username});

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

        newUser.save()
            .then(( )=> res.json("Successfuly Created a new User"))
    }catch(err){
        res.status(400).json('Error: ' + err);
    }
    
    
     
})

module.exports = router;