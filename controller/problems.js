const { cloudeUpload } = require("../helper/uploadFile");
const util = require("../util");

module.exports.addProblem = async (req, res) => {
  const { _id } = req.user;
  try {
    const problem = await util.model.Problems.create({
      user_id: _id,
      ...req.body,
    });
    res.status(200).send(problem);
  } catch (err) {
    res.status(400).send({ message: err.message });
  }
};
module.exports.updateProblem = async (req, res) => {
    try{
        const {_id,user_id}=req.body;
        if(user_id==req.user._id){
          const {title}= await util.model.Problems.findByIdAndUpdate(_id,{...req.body},{new:true});
          res.status(200).send({message:`${title} successfully updated`})
        }else{
        res.status(400).send({ message: "You are not authorize to modified this." });
        }
    }catch(err){
        res.status(400).send({ message: err.message });
    }

};

module.exports.getProblem = async (req, res) => {
  try {
    const { _id } = req.user;
    const problems = await util.model.Problems.find( { user_id: _id },{question:0,answer:0,__v:0});
    res.status(200).send(problems);
  } catch (err) {
    res.status(400).send({ message: err.message });
  }
};

module.exports.getProblemById=async(req,res)=>{
  try {
    const {_id}=req.params;
    const problems = await util.model.Problems.findOne({_id});
    res.status(200).send(problems);
  } catch (err) {
    res.status(400).send({ message: err.message });
  }
};
module.exports.getAllProblem=async (req,res)=>{
  try {
    const problems = await util.model.Problems.find({},{question:0,answer:0,__v:0});
    res.status(200).send(problems);
  } catch (err) {
    res.status(400).send({ message: err.message });
  }
}


module.exports.addProblemTypes=async (req,res)=>{
  try{
    const {title,value}=req.body;
    if(req.files && req.files.file){
      const {secure_url}=await cloudeUpload(req)
      const problemTypes=await util.model.ProblemsTypes.create({title,value,picture:secure_url})
      res.status(200).send(problemTypes);
    }else{
      const problemTypes=await util.model.ProblemsTypes.create(req.body);
      res.status(200).send(problemTypes);
    } 
  }catch(err){
    res.status(400).send({ message: err.message });
  }
}

module.exports.getProblemTypes=async (req,res)=>{
  try{
    const problemTypes=await util.model.ProblemsTypes.find()
    res.status(200).send(problemTypes);
  }catch(err){
    res.status(400).send({ message: err.message });
  }
}
module.exports.getProblemsByProblemType=async (req,res)=>{
  try{
    const {_id}=req.params;
    const problemTypes=await util.model.Problems.find({type_id:_id})
    res.status(200).send(problemTypes);
  }catch(err){
    res.status(400).send({ message: err.message });
  }
}
module.exports.updateProblemTypes=async (req,res)=>{
  try{
    const {_id}=req.params;
    if(req.files && req.files.file){
      const {secure_url}=await cloudeUpload(req)
      const result=await util.model.ProblemsTypes.findByIdAndUpdate(_id,{picture:secure_url},{new:true});
      res.status(200).send(result)
    }else{
      const result=await util.model.ProblemsTypes.findByIdAndUpdate(_id,{...req.body},{new:true});
      res.status(200).send(result)
    }
    
  }catch(err){
    res.status(400).send({ message: err.message });
  }
}


