const {RedisPubSub}= require('graphql-redis-subscriptions');
const Redis = require('ioredis');

const dotenv = require('dotenv');
dotenv.config();

const options = {
    host: process.env.REDIS_HOST || '127.0.0.1',
    port: process.env.REDIS_PORT ? process.env.REDIS_PORT : '6379',
    
    retryStrategy: times => {
        // reconnect after
        return Math.min(times * 50, 2000);
    }
};

const pubSub = new RedisPubSub({
    publisher: new Redis(options),
    subscriber: new Redis(options)
});




module.exports ={pubSub}