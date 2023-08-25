import User from '../models/users'
import bcrypt from 'bcrypt'
import jwt from 'jsonwebtoken'
import Carts from '../models/carts';

let login = async (req, res) => {
    try {
        let { username, password } = req.body;
        var user = await User.findOne({ where: { user_username: username } });

        if (!user) {
            return res.status(401).json({ message: 'Username or password incorrect' });
        } else {

            let isPasswordValid = await bcrypt.compare(password, user.user_password);
            if (!isPasswordValid) {
                return res.status(401).json({ message: 'Username or password incorrect' });
            } else {
                const payload = {
                    check: true,
                    authorization: 'user' // gán giá trị để phân quyền cho token này
                }

                let token = jwt.sign(payload, req.app.get('Secret'), {
                    expiresIn: 1440 // set token tồn tại trong 24 giờ
                });

                return res.json({
                    message: 'Loggin successfully!',
                    token: token  // gửi token về client khi đăng nhập thành công 
                })
            }
        }
    }
    catch (err) {
        console.log(err);
        return res.status(500).json({
            message: 'Error from Backend.Send error or report to Developer!',
            caution: 'Please be sure that you have already run "npm run seed","npm start","send all parameter"!',
            error: err.message
        });
    }
};

let register = async (req, res) => {
    try {
        let { username, password, gender, fullname, email, phone, birthdate } = req.body;

        let userExist = await User.findOne({ where: { user_username: username } });
        if (userExist) {
            return res.status(401).json({
                message: 'Username already exist!'
            });
        } else {
            const salt = await bcrypt.genSalt(10);
            let passwordHash = await bcrypt.hash(password, salt);
            const newUser = await User.create({
                user_username: username,
                user_password: passwordHash,
                user_gender: gender,
                user_fullname: fullname,
                user_email: email,
                user_phone: phone,
                user_birthdate: birthdate,
                role_id: 2
            });

            await Carts.create({
                user_id: newUser.user_id
            });
            return res.status(200).json({
                message: 'Register successfully!'
            });

        }
    } catch (err) {
        console.log(err);
        return res.status(500).json({
            message: 'Error from Backend.Send error or report to Developer!',
            caution: 'Please be sure that you have already run "npm run seed","npm start","send all parameter"!',
            error: err.message
        });
    }
};

module.exports = {
    login: login,
    register: register
}
