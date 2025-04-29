const express = require('express');
const users = require('../model/UserSchema');
const router = express.Router();

router.get('/:id', async (req, res) => {
    try{
      const userId = req.params.id;
      const response = await users.updateOne({_id:userId},{$set:{hasVerified:true}});
      res.status(200).send(`
          <h2 style="background-color:'green', color:'white'">
          Verification successful!!!
          </h2>
          <p>message:"Successfully Verified", modifiedCount: ${response.modifiedCount}</p>
          `);
    }catch(error){
      res.status(500).json({message:"Cannot verify user", reason:error.message});
    }
  });

  module.exports = router;