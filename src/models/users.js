const { DataTypes } = require("sequelize");
const { default: sequelize } = require("../config/database");

const Users = sequelize.define('users', {
    user_id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false
    },
    user_username: {
        type: DataTypes.STRING,
        allowNull: false
    },
    user_password: {
        type: DataTypes.STRING,
        allowNull: false
    },
    user_gender: {
        type: DataTypes.STRING,
        allowNull: false
    },
    user_fullname: {
        type: DataTypes.STRING,
    },
    user_email: {
        type: DataTypes.STRING,
    },
    user_phone: {
        type: DataTypes.STRING,
    },
    user_birthdate: {
        type: DataTypes.DATE,
    },
    role_id: {
        type: DataTypes.INTEGER,
        allowNull: false
    },
});

module.exports = Users;