import express from 'express';
import authController from '../controllers/authController';
import bookController from '../controllers/bookController';
import tokenMiddleware from '../middlewares/tokenMiddleware';
import userMiddleware from '../controllers/userController';
import cartController from '../controllers/cartController';
import categoryController from '../controllers/categoryController'
import uploadMiddleware from '../middlewares/uploadMiddleware';

let router = express.Router();

const initAPIRoutes = (app) => {
    router.post('/register', authController.register);
    router.post('/login', authController.login);
    router.get('/getBooks', bookController.getAllBooks);
    router.get('/searchBooks', bookController.searchBook);
    router.get('/getBookbyCategory', bookController.getBookByCategory);
    router.get('/getDetailBook', bookController.getDetailBook);
    router.get('/modifierUser', tokenMiddleware, userMiddleware.modifierUsers);
    router.get('/getCart', tokenMiddleware, cartController.getCart);
    router.post('/addItems', tokenMiddleware, cartController.addItems);
    router.post('/removeItems', tokenMiddleware, cartController.removeItems);
    router.get('/getUser', tokenMiddleware, userMiddleware.getUserInfo);
    router.get('/getCategorys', categoryController.getCategorys);
    router.post('/uploadProfile', uploadMiddleware.profileUpload.single('profileImage'), userMiddleware.uploadProfileImg);

    app.use('/api', router);
};

export default initAPIRoutes;