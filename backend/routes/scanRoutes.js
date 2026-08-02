const express = require("express");

const router = express.Router();

const { scanURL } = require("../controllers/scanController");

const { scanURL, getDashboard } = require("../controllers/scanController");

router.post("/analyze", scanURL);

module.exports = router;
router.get("/dashboard/:user", getDashboard);