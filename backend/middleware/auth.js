function auth(req,res,next){
    try{
        const token = req.cookies.token;
        console.log(token)
        if(!token) return res.status(401).jason({errorMessage:"Unauthorized token"})
    }catch(err){
        res.status(401).json({errorMessage: "Unauthorized"});
    }
}

module.exports = auth;