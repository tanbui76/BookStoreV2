import Books from "../models/books";

let getAllBooks = async (req, res) => {
    try {
        const BooksList = await Books.findAll();
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

module.exports = {
    getAllBooks: getAllBooks
}