const { DataTypes } = require("sequelize");
const { default: sequelize } = require("../config/database");
const Cart_items = sequelize.define("cart_items", {
    item_id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    cart_id: {
        type: DataTypes.INTEGER,
        allowNull: false
    },
    book_id: {
        type: DataTypes.INTEGER,
        allowNull: false
    },
    item_quantity: {
        type: DataTypes.INTEGER,
        allowNull: false
    }
});

module.exports = Cart_items;