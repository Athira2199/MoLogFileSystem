const express = require('express');
const router = express.Router();

let Comments = require('../models/comments');


router.post('/',async(req,res)=>{
    try{
        var file = await Comments.find({fileId:req.body.fileId})
        file.comments.push({
            empId: req.body.empId,
            comments: req.body.comments,
            time: req.body.time
        })
        file.save()
        res.status(201).json({message:'Comment created'})
    }
    catch(err){
        console.log(err)
        res.status(500).send('Internal server error')
    }
})

module.exports = router;
