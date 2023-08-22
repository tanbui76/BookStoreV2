import { Op } from "sequelize";
import Books from "../models/books";
import Categorys from "../models/categorys";

let getAllBooks = async (req, res) => {
    try {
        const BooksList = await Books.findAll({
            include: Categorys,
            attributes: { exclude: ['category_id'] }
        });
        return res.status(200).json({
            message: 'Get all books successfully!',
            data: BooksList
        });
    } catch (err) {
        return res.status(500).json({
            message: 'Get error!',
            error: err.message
        });
    }
};

let getBookByCategory = async (req, res) => {
    try {
        let { id } = req.query;
        const BooksList = await Books.findAll({
            include: Categorys,
            where: {
                category_id: id
            },
            attributes: { exclude: ['category_id'] }
        });
        return res.status(200).json({
            message: 'Get books by category successfully!',
            data: BooksList
        });
    } catch (err) {
        return res.status(500).json({
            message: 'Get error!',
            error: err.message
        });
    }
}

let searchBook = async (req, res) => {
    try {

        let keyword = req.query.keyword;
        const result = await Books.findAll({
            include: Categorys,
            where: {
                [Op.or]: [
                    {
                        book_title: {
                            [Op.like]: `%${keyword}%`
                        }
                    },
                    {
                        '$category.category_title$': {
                            [Op.like]: `%${keyword}%`
                        }
                    },
                    {
                        book_author: {
                            [Op.like]: `%${keyword}%`
                        }
                    }
                ]
            }
        });
        if (result.length === 0) {
            return res.status(200).json({
                message: `No book with keyword: ${keyword}`
            });
        }
        return res.status(200).json({
            message: 'Find complete',
            data: result
        });
    } catch (err) {
        return res.status(500).json({
            message: 'Error from Backend.Send error or report to Developer!',
            caution: 'Please be sure that you have already run "npm run seed","npm start","send all parameter"!',
            error: err.message
        })
    }

}

module.exports = {
    getAllBooks: getAllBooks,
    getBookByCategory: getBookByCategory,
    searchBook: searchBook
}