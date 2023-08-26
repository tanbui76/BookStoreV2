import multer from 'multer';
import path from 'path';

const profileStorage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, 'uploads/'); // Thư mục uploads/ phải tồn tại
    },
    filename: function (req, file, cb) {
        const uniqueSuffix = Date.now() + '-' + Math.round(Math.random() * 1E9);
        cb(null, file.fieldname + '-' + uniqueSuffix + path.extname(file.originalname));
    }
});


const profileUpload = multer({ storage: profileStorage });

module.exports = {
    profileUpload: profileUpload
}

