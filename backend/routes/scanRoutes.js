const express = require("express");

const router = express.Router();

const {
    scanURL,
    getDashboard,
    deleteScan
} = require("../controllers/scanController");

router.post("/analyze", scanURL);

router.get("/dashboard/:user", getDashboard);

router.delete("/:id", deleteScan);

module.exports = router;