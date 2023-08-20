const Roles = require("../models/roles");
const Users = require("../models/users");
const Books = require("../models/books");
const Cart_items = require("../models/cart_items");
const Carts = require("../models/carts");
const Categorys = require("../models/categorys");
const Images = require("../models/images");
const Rates = require("../models/rates");

function setUpRelationships() {
    Roles.hasMany(Users);
    Users.belongsTo(Roles);

    Categorys.hasMany(Books);
    Books.belongsTo(Categorys);

    Books.hasMany(Images);
    Images.belongsTo(Books);

    Users.hasMany(Carts);
    Carts.belongsTo(Users);

    Books.hasMany(Cart_items);
    Cart_items.belongsTo(Books);

    Carts.hasMany(Cart_items);
    Cart_items.belongsTo(Carts);

    Users.hasMany(Rates);
    Rates.belongsTo(Users);

    Books.hasMany(Rates);
    Rates.belongsTo(Books);

}

module.exports = setUpRelationships;
