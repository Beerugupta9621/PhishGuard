const express = require("express");

const router = express.Router();

const {
    scanURL,
    getDashboard
} = require("../controllers/scanController");

router.post("/analyze", scanURL);

router.get("/dashboard/:user", getDashboard);

module.exports = router;