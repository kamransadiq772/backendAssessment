const errorHandler = (err,req,res,next) => {
   console.log(err);
    let status = res.statusCode === 200 ? 500 : res.statusCode;
    res.status(status)
     .json({
        msg:'Fatal Error',
        error:err.stack
     })
}

module.exports = {errorHandler}