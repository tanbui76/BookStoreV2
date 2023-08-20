const { DataTypes } = require("sequelize");
const { default: sequelize } = require("../config/database");

const Books = sequelize.define("books", {
    book_id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false
    },
    book_title: {
        type: DataTypes.STRING,
    },
    book_author: {
        type: DataTypes.STRING,
    },
    book_description: {
        type: DataTypes.STRING,
    },
    book_price: {
        type: DataTypes.FLOAT,
    },
    book_quantity: {
        type: DataTypes.INTEGER,
    },
    category_id: {
        type: DataTypes.INTEGER,
    },
});

module.exports = Books;
