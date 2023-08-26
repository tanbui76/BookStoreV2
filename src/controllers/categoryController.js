import Categorys from "../models/categorys";

let getCategorys = async (req, res) => {
    try {
        const Listcategorys = await Categorys.findAll();
        return res.status(200).json({
            message: 'Get Categorys successfully!',
            data: Listcategorys
        });
    } catch (err) {
        return res.status(500).json({
            message: 'Error from Backend.Send error or report to Developer!',
            caution: 'Please be sure that you have already run "npm run seed","npm start","send all parameter"!',
            error: err.message
        });
    }
}

module.exports = {
    getCategorys: getCategorys
}