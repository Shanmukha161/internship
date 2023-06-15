const router=Require('express').Router();
const{user}=Require('../model/schema');

router.get('/',async(req,res)=>{
          return res.states(200).json(await user.find());
});

router.delete('/:id',async(req,res)=>{
    await user.findIdAndDelete(req.params.id);
    return res.status(200).json("deleted sucessfully")
});
module.exports=router   