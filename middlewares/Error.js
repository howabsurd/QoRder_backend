const errorMiddleware = (err, req,res, next) =>{

  err.message = err.message || "Internal Server Error";
  err.statusCode = err.statusCode || 500;

  console.log("Error : ", err.message);

  return res.status(err.statusCode).json({
    success : false,
    message : err.message
  })

}

module.exports = errorMiddleware;