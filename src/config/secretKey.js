import dotenv from 'dotenv';

dotenv.config();

module.exports = {
    key: process.env.JWT_SECRET,
}