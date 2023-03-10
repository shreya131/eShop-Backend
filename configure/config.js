const express = require("express");
const cors = require("cors");
const app = express();
const { SERVER_PORT } = require("../constant");

const PORT = SERVER_PORT;
app.use(cors());
app.use(express.json());
app.use("/", require("../routes/router"));

module.exports = {
  app,
  PORT,
};
