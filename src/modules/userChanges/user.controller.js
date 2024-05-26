import { User } from "../../../DB/models/user.model.js";
import { catchError } from "../../utils/catchError.js";
import bcryptjs from "bcryptjs";
import cloudinary from "../../utils/cloud.js";
export const changeName = catchError(async (req, res, next) => {
    const user = await User.findById(req.user._id); 
    if (!user) return next(new Error(`User not found`));
    user.userName = req.body.name ? req.body.name : user.name;
    //save in database
        await user.save();

    return res.json({
        success: true,
        message: user
    });

})
export const changeAge = catchError(async (req, res, next) => {
    const user = await User.findById(req.user._id); 
    if (!user) return next(new Error(`User not found`));
    user.age = req.body.age ? req.body.age : user.age;
    //save in database
        await user.save();

    res.json({ success: true, user });
    

})
export const changePassword = catchError(async (req, res, next) => {
    //data
    const { password } = req.body;
    const user = await User.findById(req.user._id);
    if (!user) return next(new Error(`User not found`));
    const hashPassword = bcryptjs.hashSync(
        password,
        Number(process.env.SALT_ROUNDS)
    );
    user.password = hashPassword;
    //save in database
    await user.save();
    return res.json({
        success: true,
        message: user
    });

})
export const changeEmail = catchError(async (req, res, next) => {
    const user = await User.findById(req.user._id); 
    if (!user) return next(new Error(`User not found`));
    user.email = req.body.email ? req.body.email : user.email;
    //save in database
    await user.save();
    return res.json({
        success: true,
        message: user
    });



})
export const changeProfileImage = catchError(async (req, res, next) => {
    const user = await User.findById(req.user._id); 
    if (!user) return next(new Error(`User not found`));
    console.log(user)
    if (req.file) {
        const { public_id, secure_url } = await cloudinary.uploader.upload(
            req.file.path, { public_id : user.profileImage.id }
        );
        user.profileImage.url = secure_url;
    }
    console.log(req.file)
    await user.save();
    return res.json({ success: true, user });
})
