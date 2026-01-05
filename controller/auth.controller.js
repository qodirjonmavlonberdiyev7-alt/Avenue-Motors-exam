const AuthSchema = require("../schema/auth.schema")
const CustomErrorHandler = require("../utils/custom-error-handler")
const bcrypt = require("bcryptjs")
const emailSender = require("../utils/email-sender")
const {accessToken, refreshToken} = require("../utils/token-generator")




const register = async (req, res, next) => {
    try {
        const {username, email, password} = req.body

        const foundedUser = await AuthSchema.findOne({email})

        if(foundedUser){
            throw CustomErrorHandler.UnAuthorized("User already exists")
        }
        
        const hashPassword = await bcrypt.hash(password,12);

        const randomNumbers = Array.from({length: 6}, () =>
            Math.floor(Math.random() * 10)
         ).join(" ");    

         const time = Date.now() + 1000 * 60 * 3

         await AuthSchema.create({
            username,
            email,
            password: hashPassword,
            otp: randomNumbers,
            otpTime: time
         })

         await emailSender(randomNumbers, email)

         res.status(201).json({
            message: "Registered"
         })

    } catch (error) {
        next(error)
    }
};


const resendOtp = async (req, res, next) => {
    try {
        const {email} = req.body

        const user = await AuthSchema.findOne({email})

        if(!user){
            throw CustomErrorHandler.UnAuthorized("User not found")
        }

        const randomNumbers = Array.from({length: 6}, () => Math.floor(Math.random() * 10)).join(" ");
        const time = Date.now() + 1000 * 60 * 3

        await AuthSchema.findByIdAndUpdate(user._id, {
            otp: randomNumbers,
            otpTime: time
        });

        await emailSender(randomNumbers, email);

        res.status(200).json({
            message: "Success"
        })
    } catch (error) {
        next(error)
    }
}






module.exports = {
    register,
    resendOtp
}


