const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const memberRoutes = require('./routes/members');

const app = express();
app.use(cors());
app.use(express.json());


app.use('/uploads', express.static('uploads'));


app.use('/api/members', memberRoutes);


mongoose.connect('mongodb://127.0.0.1:27017/team_management').then(() => console.log("MongoDB Connected"))
  .catch(err => console.log(err));

const PORT = 5001;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));