import Users from '../models/users';
import bcrypt from 'bcrypt';

let modifierUsers = async (req, res) => {
    let { username, oldPassword, gender, fullname, email, phone, birthdate, option } = req.body;
    let task = option;
    switch (task) {
        case 0: {
            await Users.update({ user_gender: gender, user_fullname: fullname, user_email: email, user_phone: phone, user_birthdate: birthdate }, {
                where: {
                    user_username: username
                }
            });
            return res.status(201).json({
                message: "Modified User Successfully!"
            });
        };
        case 1: {
            let newPassword = req.body.newPassword;
            const user = await Users.findOne({
                where: {
                    user_username: username
                }
            });
            let hashPassword = user.user_password;
            let check = await bcrypt.compare(oldPassword, hashPassword);
            if (check == true) {
                const salt = await bcrypt.genSalt(10);
                let passwordModifier = await bcrypt.hash(newPassword, salt);
                await Users.update({ user_password: passwordModifier }, {
                    where: {
                        user_username: username
                    }
                });
                return res.status(201).json({
                    message: "Modified Password Successfully!"
                });
            } else {
                return res.status(500).json({
                    message: "Password not mitchmatch!"
                });
            }
        };
        default:
            {
                return res.status(500).json({
                    message: "Option invalid!"
                });
            }

    }
};

let getUserInfo = async (req, res) => {
    try {

        let { user_id } = req.body;
        const user = await Users.findOne({
            where: {
                user_id: user_id
            }
        });
        return res.status(200).json({
            message: 'Get user successfully!',
            data: user
        });
    }
    catch (err) {
        return res.status(500).json({
            message: 'Error from Backend.Send error or report to Developer!',
            caution: 'Please be sure that you have already run "npm run seed","npm start","send all parameter"!',
            error: err.message
        });
    }
}

module.exports = {
    modifierUsers: modifierUsers,
    getUserInfo: getUserInfo
}