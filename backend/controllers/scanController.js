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

    }

    catch (error) {

        res.status(500).json({

            success: false,
            message: error.message

        });

    }

};