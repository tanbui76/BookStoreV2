import express from 'express';

let router = express.Router();

const initAPIRoutes = (app) => {

    app.use('/api', router);
};

export default initAPIRoutes;