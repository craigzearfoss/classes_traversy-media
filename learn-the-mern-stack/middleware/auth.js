const config = require('config');
const jwt = require('jsonwebtoken');

// The purpose of this function is to get the token that is sent from the front end (React, Postman, Angular, etc.) 
function auth(req, res, next) {
    const token = req.header('x-auth-token');

    // check for token
    if (!token) res.status(401).json({ msg: 'No token, authorization denied' });
    
    try  {
        // verify token
        const decoded = jwt.verify(token, config.get('jwtSecret'));
        // add user from payload
        req.user = decoded;
        next();
    } catch(e) {
        res.status(400).json({ msg: 'Token is not valid' });
    }
}

module.exports = auth;