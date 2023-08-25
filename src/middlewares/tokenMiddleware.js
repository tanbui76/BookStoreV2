import jwt from 'jsonwebtoken';

function authMiddleware(req, res, next) {
    const authHeader = req.headers.authorization;
    if (authHeader) {
        const token = authHeader.split(' ')[1];
        if (token) {
            jwt.verify(token, req.app.get('Secret'), (err, decoded) => {
                if (err) {
                    return res.json({ error: 'Error token!' });
                } else {
                    req.decoded = decoded; // lưu request để sử dụng cho route khác
                    next();
                }
            });
        } else {
            res.json({ error: 'No token!' });
        }
    }
}

module.exports = authMiddleware; 