import express from 'express';
import initAPIRoutes from './routes/api';
import bodyParser from 'body-parser';
import cors from 'cors';
import secretKey from './config/secretKey';
import syncSequelize from './services/snycSequelize';

require('dotenv').config();

const app = express();
const port = process.env.PORT || 3000;

app.set('Secret', secretKey.key);
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(cors());



// Middleware để gắn 'app' vào 'req'
app.use((req, res, next) => {
    req.app = app;
    next();
});


syncSequelize();
initAPIRoutes(app);

app.listen(port, () => {
    console.log(`Server listening on port ${port}`);
});
