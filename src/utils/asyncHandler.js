//making a wraper function-> which will use everywhere
//it can be done by two ways
// using promis, using try-catch

//use promise
const asyncHandler = (requestHandler) => {
  return (req, res, next) => {
    Promise.resolve(requestHandler(req, res, next)).catch((err) => next(err));
  };
};

export { asyncHandler };

//it is an higher order func->
//which can take func as an arg or can also return an func
// const asyncHandler = () => {}
// const asyncHandler = (func) => () => {}
// cosnt asyncHandler = (func) => async () => {}

//using try - catch
// const asyncHandler = (fn) => async (req, res, next) => {
//   try{
//      await fn(req, res, next)
//   }catch(error){
//     res.status(error.code || 500).json({
//       success: false,
//       message: error.message
//     })
//   }
// }
