exports.getBootCamp = (req,res,next)=>{
    res.status(200).json({
        success: true,
        message: "success getting all the bootcamps list",
      });
}

exports.getBootCampById = (req,res,next)=>{
    res.status(200).json({
        success: true,
        message:  `getting   bootcamp of id - ${req.params.id}`,
      });
}

exports.createBootCamp = (req,res,next)=>{
    res.status(200).json({
        success: true,
        message: "success creating  bootcamp",
      });
}

exports.updateBootCampById = (req,res,next)=>{
    res.status(200).json({
        success: true,
        message:  `updating   bootcamp of id - ${req.params.id}`,
      });
}

exports.deleteBootCampById = (req,res,next)=>{
    res.status(200).json({
        success: true,
        message:  `updating   bootcamp of id - ${req.params.id}`,
      });
}

