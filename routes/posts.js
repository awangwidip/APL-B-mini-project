const express = require('express');
const router = express.Router();
const postPersons = require('../models/persons');
//Get posts
router.get('/', async (req, res) =>{
    try{
        const getPost = await postPersons.find();
        res.json(getPost);
    }catch(err){
        res.json({message: err});
    }
});

//Submitting posts
router.post('/', async (req, res) => {
    const post = new postPersons({
        name: req.body.name,
        gender: req.body.gender,
        age: req.body.age,
        condition: req.body.condition,
    });
    try{
    const savedPost = await post.save();
    res.json(savedPost);
    } catch(err){
        res.json({message: err});
    }
    
});

router.get('/:Id', async (req, res) => {
    try{
        const getSpecific = await postPersons.findById(req.params.Id);
        res.json(getSpecific);
    }catch(err){
        res.json({message: err});
    }
});
//Remove data
router.delete('/:Id', async (req, res) =>{
    try{
    const shredder = await postPersons.remove({_id: req.params.Id});
    res.json(shredder);
    } catch(err){
        res.json({message: err});
    }
})

//Update data
router.patch('/:Id', async (req, res) => {
    try{
        const updateName = await postPersons.updateOne(
            {_id: req.params.Id}, 
            {$set: {name: req.body.name}});
        res.json(updateName);
        } catch(err){
            res.json({message: err});
        }
})

module.exports = router;