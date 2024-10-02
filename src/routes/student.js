const express = require('express');
const mongoose = require('mongoose');
const router = express.Router();

const student = require("../models/student");

//add student
router.post("/add/student", async(req, res) => {
    try{
        console.log(req.body);
        const std = new student(req.body);
        await std.save();
        res.json(std);
    }catch(err){
        res.status(500).json({
            message: err.message
        });
    }
    //promise
    // std.save().then(() => {
    //     res.status(201).send(std);
    // }).catch((e) => {
    //     res.status(400).send(e);
    // });
    // res.send("Add.")
});

//Get
router.get("/getAll/student", async(req, res) =>{
    try{
        const std = await student.find();
        res.json(std);
    }catch(err){
        res.status(500).json({
            message: err.message
        });
    }
});

// Get One
router.get("/get/student/:id", async(req, res) => {
    try{
        const std = await student.findById(req.params.id);
        if(!std){
            return res.status(404).json({
                message: "no data found"
            });
        }
        res.json(std);
    }catch(err){
        res.status(500).json({
            message: err.message
        });
    }
});

//Update
router.put('/update/student/:id', async(req, res) => {
    try{
        const std = await student.findByIdAndUpdate(req.params.id, req.body, {
            new: true
        });
        if(!std){
            res.status(404).json({
                message: "student not found"
            });
        }
        res.json(std);
    }catch(err){
        res.status(500).json({
            message: err.message
        });
    }
});

//Delete
router.delete('/delete/student/:id', async(req, res) => {
    try{
        const dele = await student.findByIdAndDelete(req.params.id);
        if(!dele){
            console.log("error");
        }
        res.json(dele);
    }catch(err){
        res.status(500).json({
            message: err.message
        });
    }
});


module.exports = router;