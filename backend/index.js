const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
const cookieParser = require('cookie-parser');

require('dotenv').config();

const app = express();
const port = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());
app.use(cookieParser());
app.use(cors({
    origin: ["http://localhost:3000"]
}));

const uri = process.env.ATLAS_URI;
mongoose.connect(uri,{useNewUrlParser: true, useCreateIndex: true});
const connection = mongoose.connection;
connection.once('open',()=>{
    console.log("MongoDB successfully connected");
})

//get router 
//const messageRouter = require('./routes/messages');
const usersRouter = require('./routes/users');

// app.use('/messages', messageRouter);
app.use('/users', usersRouter);
// app.use('/auth', require())

app.listen(port,() =>{
    console.log(`hello world port: ${port}`);
})