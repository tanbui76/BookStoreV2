import express from 'express';
import authController from '../controllers/authController';
import bookController from '../controllers/bookController';
import tokenMiddleware from '../middlewares/tokenMiddleware';

let router = express.Router();

const initAPIRoutes = (app) => {
    router.post('/register', authController.register);
    router.post('/login', authController.login);
    router.get('/getbooks', tokenMiddleware, bookController.getAllBooks);
    router.get('/searchbooks', bookController.searchBook);
    router.get('/getbookbycategory', tokenMiddleware, bookController.getBookByCategory);
    app.use('/api', router);
};

export default initAPIRoutes;