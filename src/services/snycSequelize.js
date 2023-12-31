import Roles from "../models/roles";
import Users from "../models/users";
import Books from "../models/books";
import Cart_items from "../models/cart_items";
import Carts from "../models/carts";
import Categorys from "../models/categorys";
import Images from "../models/images";
import Rates from "../models/rates";
const { default: sequelize } = require("../config/database");
import setUpRelationships from "../models/relationships";

function syncSequelize() {
    setUpRelationships();
    sequelize.sync({ alter: true, logging: false }).then(() => {
        console.log('Synced Sequelize!');
    });
}

module.exports = syncSequelize;