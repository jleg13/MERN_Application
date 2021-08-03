const { body } = require('express-validator');

exports.isTickerExist = (ticker) => {
    // Stub a third-party service
    if(ticker === "AAPL")
        return true
    return false
}

exports.validateData = [
    body('ticker').trim().isLength({min: 3}).withMessage('ticker must be atleast 3 chars long')
]