const logger = (req,res,next)=>{
    req.header = "mahesh";
    console.log(`${req.method} ${req.protocol}://${req.get('host')}${req.originalUrl}`);
    next();
}

module.exports = logger;