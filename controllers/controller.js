const axios = require("axios");
module.exports.allItems = async (req, res) => {
  const limit = req.body.limit;
  const skip = req.body.skip;
  axios
    .get(`https://dummyjson.com/products?limit=${limit}&skip=${skip}`)
    .then(function (response) {
      res.send(response.data);
    });
};
