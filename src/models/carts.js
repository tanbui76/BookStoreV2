const { DataTypes } = require("sequelize");
const { default: sequelize } = require("../config/database");

const Carts = sequelize.define('carts', {
    cart_id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    user_id: {
        type: DataTypes.INTEGER,
        allowNull: false
    }
});

module.exports = Carts;