import { catchAsyncErrors } from "../middlewares/catchAsyncErrors.js";
import { User } from "../models/UserSchema.js";
import ErrorHandler from "../middlewares/errorMiddleware.js";
import { generateToken } from "../utils/jwtToken.js";


export const userRegister = catchAsyncErrors(async (req, res, next) => {
  const { userEmail,userName,password } =
    req.body;
  if (
    !userName ||
    !userEmail ||
    !password
  ) {
    return next(new ErrorHandler("Please Fill Full Form!", 400));
  }

  const isRegistered = await User.findOne({ userEmail });
  if (isRegistered) {
    return next(new ErrorHandler("User already Registered!", 400));
  }

  const user = await User.create({
    userEmail,
    userName,
    password
  });
  generateToken(user, "User Registered!", 200, res);
});

export const login = catchAsyncErrors(async (req, res, next) => {
  const { userEmail,userName,password } = req.body;
  if (!userEmail || !userName || !password) {
    return next(new ErrorHandler("Please Fill Full Form!", 400));
  }
  const user = await User.findOne({ email }).select("+password");
  if (!user) {
    return next(new ErrorHandler("Invalid Email Or Password!", 400));
  }

  const isPasswordMatch = await user.comparePassword(password);
  if (!isPasswordMatch) {
    return next(new ErrorHandler("Invalid Email Or Password!", 400));
  }
  generateToken(user, "Login Successfully!", 201, res);
});





