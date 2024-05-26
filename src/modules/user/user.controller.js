
import { Token } from "../../../databases/models/token.model.js";
import bcryptjs from "bcryptjs";
import crypto from "crypto";
import randomstring from "randomstring";
import jwt from "jsonwebtoken";
import { User } from "../../../databases/models/user.model.js";
import { sendEmail } from "../../utils/sendEmail.js";
import { catchError } from "../../utils/catchError.js";
import { forgetCodeTemp, signUpTemp } from "../../utils/generateHTML.js";


// register controller
export const register = catchError(async (req, res, next) => {
    //data
    const { userName, email, password , age} = req.body;
    //check user
    const isUser = await User.findOne({ email });
    if (isUser) {
        return next(new Error("email is already exist"));
    }
    //hash password
    const hashPassword = bcryptjs.hashSync(
        password,
        Number(process.env.SALT_ROUNDS)
    );  
    // create confirmation link
    const activationCode = crypto.randomBytes(64).toString("hex");
    // create a new user
    const user = await User.create({
        userName,
        email,
        password: hashPassword,
        age,
        activationCode,
    });
    //create confirmationLink
    const link = `https://tommy-two.vercel.app/auth/confirmEmail/${activationCode}`;
    // send confirmation email

    const isEmailSent = await sendEmail({
        to: email,
        subject: "Confirmation Email",
        html: signUpTemp(link),
        
    });

    if (!isEmailSent) {
        return res.status(500).json({
            success: false,
            message: "Please try again later or contact the support team",
        });
    }
    //return response
    return res.json({
        success: true,
        message: "Sign up successful",
        user,
    });
});
// activatedAccount
export const activatedAccount = catchError(async (req, res, next) => {
    //find user & delete activationCode & update is confirmed
    const user = await User.findOneAndUpdate(
        { activationCode: req.params.activationCode },
        { isConfirmed: true },
        { $unset: { activationCode: 1 } },
        { new: true }
    );

    //check user
    if (!user) {
        return next(new Error("User not found!", { cause: 404 }));
    }

    //response
    return res.status(200).json({
        success: true,
        message: "activated account now you can login ",
    });
});
//login
export const login = catchError(async (req, res, next) => {
    //data
    const { email, password } = req.body;

    //check email
    const user = await User.findOne({ email });
    if (!user) {
        return next(new Error("User not found!", { cause: 404 }));
    }

    //check isConfirmed
    if (!user.isConfirmed) {
        return next(new Error("Please activate your account!", { cause: 403 }));
    }
    //check password
    const match = bcryptjs.compareSync(password, user.password);
    if (!match) {
        return next(new Error("sorry password incorrect ", { cause: 404 }));
    }
    //generate token
    let token = jwt.sign(
        { id: user._id, email: user.email },
        process.env.SECRET_KEY,
        // { expiresIn: "1d" },
    );
    // save token in the database
    await Token.create({
        token,
        user: user._id,
        agent: req.headers["user-agent"],
    });
    // update status to online
    user.status = "online";
    await user.save();
    user.isLogged = true;
    await user.save();

    //response
    return res.status(200).json({
        success: true,
        message: token,
    });
});
//userInfo
// export const userInfo = catchError(async (req, res, next) => {
//     const email = req.user.email
    
//     //check user
//     const isUser = await User.findOne({email});
//     if (!isUser) {
//         return next(new Error("email is not found"));
//     }
//     //data
//     const { weight, height, vegetarian, b12, illnesses, period }
//         = req.body; 
    
//     const user = await User.create({
//         weight,
//         height,
//         vegetarian,
//         b12,
//         illnesses,
//         period,
//     })
//     return res.status(201).json({
//         success: true,
//         result : user,
//         message: "create data successfully",
//     })
// })
//sendForgetPassword
export const sendForgetPassword = catchError(async (req, res, next) => {
    //data
    const { email } = req.body;
    //find user by email
    const user = await User.findOne({ email });
    if (!user) {
        return next(new Error("User not found!", { cause: 404 }));
    }
    //generate code
    const code = randomstring.generate({
        length: 4,
        charset: "numeric",
    });
    //save code in db
    user.forgetCode = code;
    await user.save();
    //send mail
    return await sendEmail({
        to: user.email,
        subject: "reset password",
        html: forgetCodeTemp(code),
    })
        ? res.status(200).json({
            success: true,
            message: "reset password",
        })
        : next(new Error("something went wrong"));
});
// resetPassword
export const resetPassword = catchError(async (req, res, next) => {
    let user = await User.findOne({ forgetCode: req.body.forgetCode });
    if (!user) return next(new Error("invalid code!"));
    //set new password and remove code from user's data
    user = await User.findOneAndUpdate(
        { email: req.body.email },
        { $unset: { forgetCode: 1 } }
    );
    //hash password
    user.password = bcryptjs.hashSync(
        req.body.password,
        Number(process.env.SALT_ROUNDS)
    );
    await user.save();
    //remove code from user's field
    const tokens = await Token.find({ user: user._id });
    tokens.forEach(async (token) => {
        token.isValid = false;
        await token.save();
    });

    return res.json({ success: true, message: "Try To Login!" });
})
export const getAllUser = catchError(async (req, res, next) => {
    const user = await User.find(); 
    
    return res.json({
        result : user
    })
})