const { catchAsyncError } = require("../middlewares/catchAsyncError");
const ErrorHandler = require("../utils/errorHandler");


exports.newUser =  catchAsyncError((req,res, next) => {
  const userExist = true;
  if(userExist){
    return next(new ErrorHandler("User Already Exist", 400));
  }
  return res.status(200).json({message: "Retucsre rres"})
})