const jwt = require('jsonwebtoken');
const generateTokens = (userId)=>{
    return jwt.sign({ id: userId }, process.env.JWT_SECRET, { expiresIn: process.env.JWT_EXPIRE });
}

module.exports = { generateToken };