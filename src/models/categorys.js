const { DataTypes } = require("sequelize");
const { default: sequelize } = require("../config/database");

const Categorys = sequelize.define('categorys', {
    category_id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false
    },
    category_title: {
        type: DataTypes.STRING,
        allowNull: true
    }
});

module.exports = Categorys;