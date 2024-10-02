const express = require('express');
const router = express.Router();
const user = require('../models/comments');

//Get
router.get('/user', async(req, res) => {
    try{
        const users = await user.find();
        res.json(users);
    }catch(err){
        res.status(500).json({
            message: err.message
        });
    }
});

//Get
router.get('/:id', async(req, res) => {
    try{
        const users = await user.findById(req.params.id);
        if(!users){
            return res.status(404).json({
                message: "User Not Found"
            });
        }
        res.json(users);
    }catch(err){
        res.status(500).json({
            message: err.message
        });
    }
});


module.exports = router;