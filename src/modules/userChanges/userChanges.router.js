import { Router } from "express";
import { isAuthenticated } from "../../middleware/authentication.middleware.js";
import { isValid } from "../../middleware/validation.middleware.js";
import { changeB12, changeCategory, changeEmail, changeHeight, changeIllnesses, changeMedications, changeName, changePassword, changePeriod, changeProfileImage, changeVegetarian, changeWeight } from "./userChanges.controller.js";
import {  changeB12Schema, changeCategorySchema, changeEmailSchema, changeHeightSchema, changeIllnessesSchema, changeMedicationsSchema, changeNameSchema, changePasswordSchema, changePeriodSchema, changeVegetarianSchema, changeWeightSchema } from "./userChanges.validation.js";
import { fileUpload, filterObject } from "../../utils/multer.js";
import { changeAge } from "./user.controller.js";

const router = Router();
//name
router.patch("/changeName",
    isAuthenticated,
    isValid(changeNameSchema),
    changeName);
//age
router.patch("/changeAge",
    isAuthenticated,
    isValid(changeAgeSchema),
    changeAge);
//password
router.patch("/changePassword",
    isAuthenticated,
    isValid(changePasswordSchema),
    changePassword);
//email
router.patch("/changeEmail",
    isAuthenticated,
    isValid(changeEmailSchema),
    changeEmail);

//changeProfileImage
router.patch("/profileImage",
    isAuthenticated,
    fileUpload(filterObject.image).single("changeProfileImage"),
    changeProfileImage);

export default router;
