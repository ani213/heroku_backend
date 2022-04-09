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
        const {_id}=req.body;
        const {title}= await util.model.Problems.findByIdAndUpdate(_id,{...req.body},{new:true});
        res.status(200).send({message:`${title} successfully updated`})
    }catch(err){
        res.status(400).send({ message: err.message });
    }

};

module.exports.getProblem = async (req, res) => {
  try {
    const { _id } = req.user;
    const problems = await util.model.Problems.find({
      where: { user_id: _id },
    });
    res.status(200).send(problems);
  } catch (err) {
    res.status(400).send({ message: err.message });
  }
};
