const { DataTypes } = require("sequelize");
const { default: sequelize } = require("../config/database");

const Images = sequelize.define("images", {
    image_id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false
    },
    image_url: {
        type: DataTypes.STRING,
        allowNull: false
    },
    book_id: {
        type: DataTypes.INTEGER
    }
});

module.exports = Images;