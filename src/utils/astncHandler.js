const { request } = require("express");

const asyncHandler = (requestHandler) => {
     (req, res, next) => {
        Promise.resolve(requestHandler(req, res, next)).catch(next);
    }
}
export {asyncHandler}

// wraps an async function and catches any errors that it throws
// const asyncHandler = (fn)=> async(req, res, next)=>{

// try {
//  await fn(req, res, next)
// }catch (error) {
//     res.tatus(500).json({message: error.message})
// }
// }

