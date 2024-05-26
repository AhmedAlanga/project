import jwt from "jsonwebtoken"
import { AppError } from "../utils/AppError.js"

export const auth = async(req,res,next) => {
    jwt.verify(req.header('token'),'ayKey',(err,decoded)=>{
        if(err) return next(new AppError(err,401))
        req.user=decoded
        next()
    })
}