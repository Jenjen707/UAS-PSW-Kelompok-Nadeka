const express = require("express");
const router = express.Router();
const { getbuahan_shop } = require("../controllers/homeControllers");


router.get("/", getbuahan_shop);

module.exports = router;
