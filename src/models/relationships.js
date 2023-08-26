const Roles = require("../models/roles");
const Users = require("../models/users");
const Books = require("../models/books");
const Cart_items = require("../models/cart_items");
const Carts = require("../models/carts");
const Categorys = require("../models/categorys");
const Images = require("../models/images");
const Rates = require("../models/rates");

function setUpRelationships() {
    Roles.hasMany(Users, {
        foreignKey: {
            name: 'role_id',
            allowNull: false
        }
    });
    Users.belongsTo(Roles, {
        foreignKey: {
            name: 'role_id',
            allowNull: false
        }
    });

    Categorys.hasMany(Books, {
        foreignKey: {
            name: 'category_id',
            allowNull: false
        }
    });
    Books.belongsTo(Categorys, {
        foreignKey: {
            name: 'category_id',
            allowNull: false
        }
    });

    Books.hasMany(Images, {
        foreignKey: {
            name: 'book_id',
            allowNull: false
        }
    });
    Images.belongsTo(Books, {
        foreignKey: {
            name: 'book_id',
            allowNull: false
        }
    });

    Users.hasMany(Carts, {
        foreignKey: {
            name: 'user_id',
            allowNull: false
        }
    });
    Carts.belongsTo(Users, {
        foreignKey: {
            name: 'user_id',
            allowNull: false
        }
    });

    Books.hasMany(Cart_items, {
        foreignKey: {
            name: 'book_id',
            allowNull: false
        }
    });
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
    Cart_items.belongsTo(Carts, {
        foreignKey: {
            name: 'cart_id',
            allowNull: false
        }
    });

    Users.hasMany(Rates, {
        foreignKey: {
            name: 'user_id',
            allowNull: false
        }
    });
    Rates.belongsTo(Users, {
        foreignKey: {
            name: 'user_id',
            allowNull: false
        }
    });

    Books.hasMany(Rates, {
        foreignKey: {
            name: 'book_id',
            allowNull: false
        }
    });
    Rates.belongsTo(Books, {
        foreignKey: {
            name: 'book_id',
            allowNull: false
        }
    });
}

module.exports = setUpRelationships;
