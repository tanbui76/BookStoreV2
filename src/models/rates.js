const { DataTypes } = require("sequelize");
const { default: sequelize } = require("../config/database");
const Rates = sequelize.define("rates", {
    rate_id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    rate_score: {
        type: DataTypes.INTEGER,
        allowNull: false
    },
    rate_title: {
        type: DataTypes.STRING,
        allowNull: false
    },
    rate_description: {
        type: DataTypes.STRING,
        allowNull: false
    },
    rate_date: {
        type: DataTypes.DATE,
    },
    book_id: {
        type: DataTypes.INTEGER,
        allowNull: false
    },
    user_id: {
        type: DataTypes.INTEGER,
        allowNull: false
    }
});

module.exports = Rates;