const { DataTypes } = require("sequelize");
const { default: sequelize } = require("../config/database");

const Roles = sequelize.define("Roles", {
    role_id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false,
    },
    role_type: {
        type: DataTypes.STRING,
        allowNull: false,
    }
});


module.exports = Roles;
