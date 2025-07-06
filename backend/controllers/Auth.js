import {User} from '../models/User.js';
import {Otp} from '../models/Otp.js'
import {asynsHandler} from '../utils/asyncHandler.js';
import {ApiResponse} from '../utils/apiResponse.js';
import {ApiError} from '../utils/ApiError.js'

const sendOTP = asynsHandler(async(req, res) => {
    const {email} = req.body;

    const checkUserPresent = await User.findOne({email});

})

export {
    sendOTP
}