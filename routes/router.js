const router = require("express").Router();
const controller = require("../controllers/controller");

router.post("/home", controller.allItems);
module.exports = router;
