import multer from 'multer';
import path from 'path';

var profileStorage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, 'src/uploads');
    },
    filename: function (req, file, cb) {
        const uniqueSuffix = Date.now() + '-' + Math.round(Math.random() * 1E9);
        cb(null, file.fieldname + '-' + uniqueSuffix + path.extname(file.originalname));
    }
});


var profileUpload = multer({ storage: profileStorage });

module.exports = {
    profileUpload: profileUpload
}

