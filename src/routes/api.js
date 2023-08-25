import express from 'express';
import authController from '../controllers/authController';
import bookController from '../controllers/bookController';
import tokenMiddleware from '../middlewares/tokenMiddleware';
import userMiddleware from '../controllers/userController';
import cartController from '../controllers/cartController';

let router = express.Router();

const initAPIRoutes = (app) => {
    router.post('/register', authController.register);
    router.post('/login', authController.login);
    router.get('/getbooks', bookController.getAllBooks);
    router.get('/searchbooks', bookController.searchBook);
    router.get('/getbookbycategory', bookController.getBookByCategory);
    router.get('/getdetailbook', bookController.getDetailBook);
    router.get('/modifierUser', tokenMiddleware, userMiddleware.modifierUsers);
    router.get('/getCart', tokenMiddleware, cartController.getCart);
    router.post('/addItems', tokenMiddleware, cartController.addItems);
    router.post('/removeItems', tokenMiddleware, cartController.removeItems);
    router.get('/getUser', tokenMiddleware, userMiddleware.getUserInfo);

    app.use('/api', router);
};

export default initAPIRoutes;