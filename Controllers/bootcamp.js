const BootCamp = require('../Models/BootCamp');


exports.getBootCamp = async  (req,res,next)=>{
  try{
    const getbootlist = await BootCamp.find();
    res.status(200).json({
      success: true,
      count : getbootlist.length,
      data: getbootlist,
      logger:req.header
    });
  }catch(err){
    res.status(400).send({error:err.message});
    }
    
}

exports.getBootCampById = async (req,res,next)=>{
  
  try{
    const getbootlistbyid = await BootCamp.findById(req.params.id);
    if(!getbootlistbyid){
      return res.status(400).send({status:"false"})
    }
    res.status(200).json({
      success: true,
      data: getbootlistbyid,
      logger:req.header
    });
  }catch(err){
    res.status(400).send({error:err.message});
    }
}


//create BootCamp
exports.createBootCamp = async (req,res,next)=>{
try{
  const createBoot = await BootCamp.create(req.body);
  res.status(201).json({
    sucess:"true",
    data:createBoot
  });
}catch(err){
  console.log("error occures");
  res.status(400).json({
    "sucess":"false",
    error: err.message})
}
}

exports.updateBootCampById = async (req,res,next)=>{
  try{
    const updatebootlistbyid = await BootCamp.findByIdAndUpdate(req.params.id,req.body,{
      new :true,
      runValidators:true
    });
    if(!updatebootlistbyid){
      return res.status(400).send({status:"false"})
    }
    res.status(200).json({
      success: true,
      message:  `updating   bootcamp of id - ${req.params.id}`,
      data: updatebootlistbyid,
    });
  }catch(err){
    res.status(400).send({error:err.message});
    }
 
}

exports.deleteBootCampById = async  (req,res,next)=>{
  try{
    const deletebootlistbyid = await BootCamp.findByIdAndDelete(req.params.id);
    if(!deletebootlistbyid){
      return res.status(400).send({status:"false"})
    }
    res.status(200).json({
      success: true,
      message:  `deleting   bootcamp of id - ${req.params.id}`,
      data: "id deleted ",
      logger:req.header
    });
  }catch(err){
    res.status(400).send({error:err.message});
    }
}

