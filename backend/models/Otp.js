import mongoose from "mongoose";
import { mailSender } from "../utils/mailSender";
const OTPSchema = new mongoose.Schema({
    email:{
        type: String,
        required: true,
        trim: true
    },
    otp: {
        type: String,
        required: true,
        trim: true
    }, 
    createdAt: {
        type: Date,
        default: Date.now(),
        expires: 5*60 ,
    }
}) 

async function sendVerificationEmail(email, otp) {
    try{
        const mailResponse = await mailSender(email,"Verification email from CourseWallah", otp);
        console.log("Verification email sent successfully:", mailResponse);
    }catch(error){
        //differene btwn console.error and throw error and console.log
        console.error("Error sending verification email:", error);
        throw error;
    }
}

OTPSchema.pre('save', async function(next) {
    await sendVerificationEmail(this.email, this.otp);
    next();
})

export const Otp = mongoose.model('OTP', OTPSchema);