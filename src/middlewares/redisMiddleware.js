import connectRD from '../config/connectRD.js';
const redisClient = connectRD;

function cacheMiddleware(req, res, next) {
    const cacheKey = req.originalUrl;

    redisClient.get(cacheKey, (err, data) => {
        if (err) {
            console.error('Có sự cố với Redis:', err);
            throw err;
        }

        if (data !== null) {
            console.log('Tồn tại dữ liệu trong Cache. Trả về dữ liệu từ cache');
            const responseData = JSON.parse(data);
            res.json(responseData);
        } else {
            console.log('Cache rỗng - Chạy lệnh truy vấn.');
            res.sendResponse = res.json;
            res.json = (data) => {
                console.log('Lưu dữ liệu vào Cache');
                redisClient.setex(cacheKey, 3600, JSON.stringify(data));
                res.sendResponse(data);
            };
            next();
        }
    });
}

module.exports = cacheMiddleware;
