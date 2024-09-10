const jwt = require('jsonwebtoken');

function authMiddleware(req, res, next) {
    const authHeader = req.header('Authorization');
    
    if (!authHeader) {
        return res.status(401).json({ msg: 'No token, authorization denied' });
    }

    const tokenParts = authHeader.split(' ');
    if (tokenParts[0] !== 'Bearer' || !tokenParts[1]) {
        return res.status(401).json({ msg: 'Token format is invalid' });
    }

    const token = tokenParts[1];

    try {
        // Verify the token and attach decoded user info to req.user
        const decoded = jwt.verify(token, process.env.JWT_SECRET);
        req.user = decoded;  // This must be set if verification succeeds
        next();
    } catch (err) {
        res.status(401).json({ msg: 'Token is not valid' });
    }
}

module.exports = authMiddleware;



