const jwt = require('jsonwebtoken');


const requireAuth = (req, res, next) => {
    const token = req.cookies.jwt;

    // check json web token exists
    if (token) {
        next();
    }else {
        res.redirect('/login');
    }
}



module.exports = { requireAuth };