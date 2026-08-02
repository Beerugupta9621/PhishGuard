const express = require("express");
const cors = require("cors");

const authRoutes = require("./routes/authRoutes");

const app = express();
const scanRoutes=require("./routes/scanRoutes");
const auth = require("./middleware/authMiddleware");

app.use(cors());
app.use(express.json());

app.get("/", (req, res) => {

    res.json({
        message: "Welcome to PhishGuard API"
    });

});

app.use("/api/auth", authRoutes);
app.get("/api/profile", auth, (req, res) => {

    res.json({

        success: true,
        message: "Protected Route Accessed",
        user: req.user

    });

});
module.exports = app;
app.use("/api/scan",scanRoutes);