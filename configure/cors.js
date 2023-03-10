const { allowedOrigins } = require("../constant.js");
module.exports.corsOptions = {
  origin: function (origin, callback) {
    if (allowedOrigins.indexOf(origin) !== -1) {
      callback(null, true);
    } else {
      callback(new Error("Unauthorized"));
    }
  },
};
