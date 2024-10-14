
import { catchAsyncErrors } from "./catchAsyncErrors.js";
import ErrorHandler from "./errorMiddleware.js";
import jwt from "jsonwebtoken";



// Middleware to authenticate frontend users
export const isUserAuthenticated = catchAsyncErrors(
  async (req, res, next) => {
    const token = req.cookies.userToken;
    if (!token) {
      return next(new ErrorHandler("User is not authenticated!", 400));
    }
    next();
  }
);


