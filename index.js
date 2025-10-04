require('dotenv').config();
const mongoose = require('mongoose');
const express = require('express');


const app = express();


app.use(express.json());

const MONGO_URI='mongodb://localhost:27017/jobTrackerDB';
const PORT = process.env.PORT||3000;

mongoose.connect(MONGO_URI,{
  useUnifiedTopology:true,
  useNewUrlParser:true,
})
.then(()=>{
  console.log('Connected to MongoDB');
})
.catch(()=>{
  console.log(`Error connecting to MongoDB ${err}`)
});

app.listen(PORT, () => {
  console.log(`Server listening at http://localhost:${PORT}`);
});
