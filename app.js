// const request = require("request");
// const URL = "https://dummyjson.com/products";

// request({ url: URL }, (error, response) => {
//   const data = JSON.parse(response.body);
//   console.log(data);
// });

// const path = require("path");
// const express = require("express");
// const fs = require("fs");
// const app = express();
// const http = require("http");
// const publicDirectoryPath = path.join(__dirname, "../Frontend/src/components");

// app.use(express.static(publicDirectoryPath));

const { app, PORT } = require("./configure/config");
const bootstrap = async () => {
  try {
    app.listen(PORT, async () => {
      console.log(`Server is running at ${PORT}`);
    });
  } catch (error) {
    console.log(error);
  }
};
bootstrap();
