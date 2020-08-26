const express = require('express');
const router = express.Router();

let Folder = require('../models/folder');

router.get('/',async(req,res)=>{
    try{
        var folder = await Folder.find({folderId: req.body.folderId})
        folder.files.push(req.body.fileId)
        folder.save()
        res.status(201).json({message:'Comment created'})
    }
    catch(err){
        console.log(err)
        res.status(500).send('Internal server error')
    }
})

module.exports = router;
