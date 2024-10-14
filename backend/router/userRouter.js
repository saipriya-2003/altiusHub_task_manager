import express from "express";
import {
  login,
  userRegister
} from "../controller/userController.js";


const router = express.Router();


router.post("/login", login);
router.post("/register",userRegister)

export default router;
