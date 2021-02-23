const express = require("express");
const dotenv = require("dotenv");
const morgan = require('morgan');
const connectDB = require('./Config/db');
const colors = require('colors');
//load env vars
dotenv.config({ path: "./Config/config.env" });
const bootcampsrouter = require('./Routes/bootcamps');
// const logger = require('./middleware/logger');

//connect to DB
connectDB();

const app = express();
app.use(express.json());


app.use(morgan('dev'));

app.use('/api/v1/bootcamps', bootcampsrouter);

const PORT = process.env.PORT || 5000;

const server = app.listen(
  PORT,
  console.log(
    `server is running at mode : ${process.env.NODE_ENV} at  port :${process.env.PORT} `
  .blue.bold)
);

process.on('unhandledRejection',(err,promise)=>{
  console.log(`Error: ${err.message}`.red);

  server.close(()=>{
    process.exit(1);
  })
})
