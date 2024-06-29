const mongoose = require("mongoose")

const chat = mongoose.Schema({
    chatName : {type:String, trim:true},
    isGroupChat : {type:Boolean, default:false},
    users :[
        {
            type:mongoose.Schema.Types.ObjectId,
            ref:"user"
        }
    ],
    latestMessage:{
        type: mongoose.Schema.Types.ObjectId,
        ref:"message"
    },
    groupAdmin :{
        type: mongoose.Schema.Types.ObjectId,
        ref:"user"
    },
},{
    timestamps:true
})

const ChatModel = mongoose.model("chat", chat)

module.exports = {ChatModel}