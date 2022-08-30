const express = require("express");
const controller = require("../controllers/apiController");


const router = express.Router();

router.get('/apiSearch', controller.getItemTags);

module.exports = router;