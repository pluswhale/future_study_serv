const { homepage } = require("../controllers/homePageController");

const router = require("express").Router();

router.get("/", homepage);

module.exports =  router;