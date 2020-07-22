const async = require('async');

const redisCache = require('../lib/RedisCache');
const Message = require('../services/message');
// const Message = require('../models/Message');
const misc = require('../helpers/misc');



const message = {
    getMessageQuery: (res, obj, status, success, message) => {
        console.log("---->"+JSON.stringify(obj)+status, success, message);
        const key = message;
        async.waterfall([
            (cb) => {
                redisCache.get(key, result => {
                    if (result) {
                        return misc.responses(res, obj, status, success, result);
                    } else {
                        cb(null);
                    }
                });
            },
            (cb) => {
                Message.getAll(message, (err, result) => {
                    cb(err, result);
                });
            },
            (result, cb) => {
                // console.log(JSON.stringify(result));
                redisCache.setex(key, 1800, result);
                console.log(`${key} successfuly cached`);
                cb(null, result);
            }
        ], (err, result) => {
            if (!err) {
                return misc.responses(res, obj, status, success, result);
            } else {
                return misc.errorCustom(res, err);
            }
        });

    },
    getMessageSequel: async (message) => {
        try {
            return await Message.findAll({ where: { msg_number: message } });
        } catch (error) {
            throw error;
        }
    }
}

module.exports = message;