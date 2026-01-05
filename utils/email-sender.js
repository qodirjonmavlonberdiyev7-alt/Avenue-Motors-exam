const nodemailer = require("nodemailer")
const CustomErrorHandler = require("./custom-error-handler")


module.exports = async function(code, email){
    try {
        const transporter = nodemailer.createTransport({
            service: "gmail",
            auth: {
                user: "qodirjonmavlonberdiyev7@gmail.com",
                pass: process.env.APP_KEY
            }
        })

        await transporter.sendMail({
            from: "qodirjonmavlonberdiyev7@gmail.com",
            to: email,
            subject: "Avenue Motors",
            html: `<b style="color: blue; font-size: 20px;">${code}</b>`
        })
    } catch (error) {
        throw CustomErrorHandler.BadRequest(error.message)
    }
}