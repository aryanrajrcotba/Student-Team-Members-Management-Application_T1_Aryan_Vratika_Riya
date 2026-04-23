const express = require('express');
const router = express.Router();
const multer = require('multer');
const Member = require('../models/Member');


const storage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, 'uploads/'); 
    },
    filename: function (req, file, cb) {
        cb(null, Date.now() + '-' + file.originalname);
    }
});
const upload = multer({ storage: storage });


router.post('/', upload.single('image'), async (req, res) => {
    try {
        const newMember = new Member({
            ...req.body,
            image: req.file ? req.file.path : ''
        });
        await newMember.save();
        res.status(201).json({ message: 'Member added successfully' });
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
});


router.get('/', async (req, res) => {
    try {
        const members = await Member.find();
        res.json(members);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
});


router.get('/:id', async (req, res) => {
    try {
        const member = await Member.findById(req.params.id);
        res.json(member);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
});

module.exports = router;