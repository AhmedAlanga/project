import mongoose, { model, Schema, Types } from "mongoose";

//schema
export const userSchema = new Schema({
    token: {
        type: String,
        require: true
    },
    user: {
        type: Types.ObjectId,
        ref: "User"
    },
    isValid: {
        type: Boolean,
        default: true
    },
    agent: String,
    expiredAt: String


}, { timestamp: true })

//model
export const Token = mongoose.models.token || model("Token", userSchema)