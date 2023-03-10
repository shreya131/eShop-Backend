const dotenv = require("dotenv");
dotenv.config();

module.exports = {
  allowedOrigins: ["http://localhost:5000/"],
  SERVER_PORT: process.env.PORT || 4000,
};
