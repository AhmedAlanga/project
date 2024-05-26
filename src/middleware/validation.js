import { Types } from "mongoose";

export const isValidIdObject = (value, helper) => {

    return Types.ObjectId.isValid(value) ? true : helper.message("Invalid objectId")
}

export const isValid = (schema) => {
    return (req, res, next) => {
        //data 
        const copyReq = { ...req.body, ...req.params, ...req.query };

        //validate data against schema
        const validationResult = schema.validate(copyReq, { abortEarly: false });
        if (validationResult.error) {
            const message = validationResult.error.details.map((element) => element.message)
            return next(new Error("message : " + message, { cause: 400 }));
        }
        return next()
    }


}