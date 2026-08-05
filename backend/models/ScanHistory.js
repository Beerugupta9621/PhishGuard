const mongoose = require("mongoose");

const scanHistorySchema = new mongoose.Schema(
{
    user: {
        type: String,
        required: true
    },

    url: {
        type: String,
        required: true
    },

    result: {
        type: String,
        enum: ["Safe", "Phishing"],
        required: true
    }
},
{
    timestamps: true
}
);

module.exports = mongoose.model("ScanHistory", scanHistorySchema);