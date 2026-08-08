const ScanHistory = require("../models/ScanHistory");
const analyzeURL = require("../utils/urlAnalyzer");

// Analyze URL
exports.scanURL = async (req, res) => {

    try {

        const { user, url } = req.body;

        const analysis = analyzeURL(url);

        const scan = await ScanHistory.create({
            user,
            url,
            result: analysis.prediction
        });

        res.status(200).json({
            success: true,
            prediction: analysis.prediction,
            riskScore: analysis.score,
            data: scan
        });

    } catch (error) {

        res.status(500).json({
            success: false,
            message: error.message
        });

    }

};

// Dashboard
exports.getDashboard = async (req, res) => {

    try {

        const { user } = req.params;

        const totalScans = await ScanHistory.countDocuments({ user });

        const safeScans = await ScanHistory.countDocuments({
            user,
            result: "Safe"
        });

        const phishingScans = await ScanHistory.countDocuments({
            user,
            result: "Phishing"
        });

        const recentScans = await ScanHistory.find({ user })
            .sort({ createdAt: -1 })
            .limit(5);

        res.json({
            success: true,
            statistics: {
                totalScans,
                safeScans,
                phishingScans
            },
            recentScans
        });

    } catch (error) {

        res.status(500).json({
            success: false,
            message: error.message
        });

    }

};

// Delete scan
exports.deleteScan = async (req, res) => {

    try {

        const { id } = req.params;

        await ScanHistory.findByIdAndDelete(id);

        res.json({
            success: true,
            message: "Scan deleted successfully"
        });

    } catch (error) {

        res.status(500).json({
            success: false,
            message: error.message
        });

    }

};