import express from 'express';
import authController from '../controllers/authController';

let router = express.Router();

const initAPIRoutes = (app) => {
    router.get('/register', authController.register);
    router.post('/login', authController.login);
    app.use('/api', router);
};

export default initAPIRoutes;