const express = require("express");
const dotenv = require("dotenv");

//load env vars
dotenv.config({ path: "./Config/config.env" });
const bootcampsrouter = require('./Routes/bootcamps');

const app = express();

app.use('/api/v1/bootcamps', bootcampsrouter);

const PORT = process.env.PORT || 5000;

app.listen(
  PORT,
  console.log(
    `server is running at mode : ${process.env.NODE_ENV} at  port :${process.env.PORT} `
  )
);
