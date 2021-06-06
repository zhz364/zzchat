const jwt = require("jsonwebtoken");

function auth(req,res,next){
    try{
        const token = req.cookies.token;
        if(!token) return res.status(401).jason({errorMessage:"Unauthorized token"});
        
        const verified = jwt.verify(token,process.env.JWT_SECRET);
        
        req.user = verified.user;

        next();
    }catch(err){
        res.status(401).json({errorMessage: "Unauthorized"});
    }
}

module.exports = auth;