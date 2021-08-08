const express = require('express');
const router = express.Router();
const newPostTemplate = require('../models/postModel');
const RantPost = require('../models/postModel');

router.get('/api', (req, res) => {
    RantPost.find({}).then((data) => {
        console.log('Data: ', data);
        res.json(data);
    })
})

router.post('/newPost', (req, res) => {
    const newPost = new newPostTemplate({
        title: req.body.title,
        content: req.body.content
    })
    newPost.save().then(data => res.json(data)).catch(error => res.json(error));
}) 

module.exports = router;