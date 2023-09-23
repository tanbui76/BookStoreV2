import Rates from "../models/rates";


let getRates = async (req, res) => {
    try {
        const ListRates = await Rates.findAll();
        return res.status(200).json({
            message: 'Get Rates successfully!',
            data: ListRates
        });
    } catch (err) {
        return res.status(500).json({
            message: 'Error from Backend.Send error or report to Developer!',
            caution: 'Please be sure that you have already run "npm run seed","npm start","send all parameter"!',
            error: err.message
        });
    }
};

let getRatesByBook = async (req, res) => {
    try {
        let { id } = req.body;
        const ListRates = await Rates.findAll({
            where: {
                book_id: id
            }
        });
        return res.status(200).json({
            message: 'Successfully!',
            data: ListRates
        });
    } catch (err) {
        return res.status(500).json({
            message: 'Error from Backend.Send error or report to Developer!',
            caution: 'Please be sure that you have already run "npm run seed","npm start","send all parameter"!',
            error: err.message
        });
    }
};

let addRate = async (req, res) => {
    try {
        let { rate_score, rate_title, rate_description, rate_date, book_id, user_id } = req.body;
        Rates.create
    } catch (err) {
        return res.status(500).json({
            message: 'Error from Backend.Send error or report to Developer!',
            caution: 'Please be sure that you have already run "npm run seed","npm start","send all parameter"!',
            error: err.message
        });
    }
};

module.exports = {
    getRates: getRates,
    getRatesByBook: getRatesByBook
}