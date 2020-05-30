const jwt = require("jsonwebtoken");
const config = require("config");

module.exports = function(req, res, next) {

    const token = req.header('x-auth-token');
    console.log(" 1token ",token);

    if (!token) {
        return res.status(401).json({ msg: 'no token auth denied' })
    }

    try {
        const decoded = jwt.verify(token, config.get('jwtSecret'));
        req.user=decoded.user;
        next(); 

    } catch (err) {

        return res.status(401).json({ msg: err+' no token auth denied' })
    }
}