import { Redis } from "ioredis";
import dotenv from 'dotenv';

dotenv.config();

const redisConfig = {
    host: process.env.REDIS_HOST,
    port: process.env.REDIS_PORT,
};

const redisClient = new Redis(redisConfig);

module.exports = redisClient;