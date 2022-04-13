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
  
