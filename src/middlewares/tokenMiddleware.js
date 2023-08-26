import jwt from 'jsonwebtoken';

function authMiddleware(req, res, next) {
    const authHeader = req.headers.authorization;
    console.log(authHeader);
    if (authHeader) {
        const token = authHeader.split(' ')[1];
        console.log(authHeader);
        if (token) {
            console.log(token);
            jwt.verify(token, req.app.get('Secret'), (err, decoded) => {
                if (err) {
                    return res.json({ error: 'Error token!' });
                } else {
                    req.decoded = decoded;
                    next();
                }
            });
        } else {
            res.json({ error: 'No token!' });
        }
    }
}

module.exports = authMiddleware; 