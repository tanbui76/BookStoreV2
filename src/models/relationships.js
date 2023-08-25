const Roles = require("../models/roles");
const Users = require("../models/users");
const Books = require("../models/books");
const Cart_items = require("../models/cart_items");
const Carts = require("../models/carts");
const Categorys = require("../models/categorys");
const Images = require("../models/images");
const Rates = require("../models/rates");

function setUpRelationships() {
    // Roles.hasMany(Users);
    Users.belongsTo(Roles, {
        foreignKey: {
            name: 'role_id',
            allowNull: false
        }
    });

    // Categorys.hasMany(Books);
    Books.belongsTo(Categorys, {
        foreignKey: {
            name: 'category_id',
            allowNull: false
        }
    });

    // Books.hasMany(Images);
    Images.belongsTo(Books, {
        foreignKey: {
            name: 'book_id',
            allowNull: false
        }
    });

    // Users.hasMany(Carts);
    Carts.belongsTo(Users, {
        foreignKey: {
            name: 'user_id',
            allowNull: false
        }
    });

    // Books.hasMany(Cart_items);
    Cart_items.belongsTo(Books, {
        foreignKey: {
            name: 'book_id',
            allowNull: false
        }
    });

    Carts.hasMany(Cart_items, {
        foreignKey: {
            name: 'cart_id',
            allowNull: false
        }
    });
    // Cart_items.belongsTo(Carts);

    // Users.hasMany(Rates);
    Rates.belongsTo(Users, {
        foreignKey: {
            name: 'user_id',
            allowNull: false
        }
    });

    // Books.hasMany(Rates);
    Rates.belongsTo(Books, {
        foreignKey: {
            name: 'book_id',
            allowNull: false
        }
    });
}

module.exports = setUpRelationships;
