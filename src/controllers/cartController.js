import Cart_items from "../models/cart_items";
import Carts from "../models/carts";

let addItems = async (req, res) => {
    try {
        let { cartId, bookId, quantity } = req.body;
        const checkItem = await Cart_items.findOne({
            where: {
                cart_id: cartId,
                book_id: bookId
            }
        });
        if (checkItem) {
            await Cart_items.update(
                {
                    item_quantity: quantity
                },
                {
                    where: {
                        cart_id: cartId,
                        book_id: bookId
                    }
                }
            );
            return res.status(200).json({
                message: 'Modified cart_items!'
            });
        } else {
            await Cart_items.create({
                user_id: userId,
                book_id: bookId,
                item_quantity: quantity
            });
        }
    } catch (err) {
        return res.status(500).json({
            message: 'Error from Backend.Send error or report to Developer!',
            caution: 'Please be sure that you have already run "npm run seed","npm start","send all parameter"!',
            error: err.message
        });
    }

};

let removeItems = async (req, res) => {
    try {
        let { cartId, bookId } = req.body;
        await Cart_items.destroy({
            where: {
                cart_id: cartId,
                book_id: bookId
            }
        });
        return res.status(200).json({
            message: 'Removed Items'
        });
    } catch (err) {
        return res.status(500).json({
            message: 'Error from Backend.Send error or report to Developer!',
            caution: 'Please be sure that you have already run "npm run seed","npm start","send all parameter"!',
            error: err.message
        });
    }
};

let getCart = async (req, res) => {
    try {
        let { user_id } = req.body;
        let Cart_items_list = await Carts.findAll({
            include: Cart_items,
            where: {
                user_id: user_id
            }
        });
        return res.status(200).json({
            message: 'Get cart by user successfully!',
            data: Cart_items_list
        });
    } catch (err) {
        return res.status(500).json({
            message: 'Error from Backend.Send error or report to Developer!',
            caution: 'Please be sure that you have already run "npm run seed","npm start","send all parameter"!',
            error: err.message
        });
    }
};

module.exports = {
    addItems: addItems,
    getCart: getCart,
    removeItems: removeItems
}