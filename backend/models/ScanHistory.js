const mongoose = require("mongoose");

const scanHistorySchema = new mongoose.Schema(
{
    user:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"User",
        required:true
    },

    url:{
        type:String,
        required:true
    },

    result:{
        type:String,
        enum:["Safe","Phishing"],
        required:true
    }
},
{
    timestamps:true
}
);

module.exports = mongoose.model("ScanHistory",scanHistorySchema);