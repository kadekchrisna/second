const async = require('async');

const User = require('../services/user');
const redisCache = require('../lib/RedisCache');


/*
*   GET : '/user/'
*   
*   desc: getting all users 
*
*   @param {object} req - Parameters for request
*
*   @return {object} users or error
*/
exports.index = async (req, res, next) => {
    try {
        const user = await User.getAllUsers();
        return MISC.responses(res, user);
    } catch (error) {
        return MISC.errorCustom(res, error);
    }
};


/*
*   GET : '/user/all'
*   
*   desc: getting all users and store the result data in redis (test response time)
*
*   @param {object} req - Parameters for request
*
*   @return {object} users or error
*/
exports.showAll = (req, res, next) => {
    const key = 'show-all';
    async.waterfall([
        (cb) => {
            redisCache.get(key, result => {
                if (result) {
                    return MISC.responses(res, result);
                }else {
                    cb(null);
                }
            });
        },
        (cb) => {
            User.getAllUsers().then(result => {
                redisCache.setex(key, 1800, result);
                console.log(`${key} successfully cached`);
                cb(null, result);
            }).catch(err => cb(err, null));
        }
    ], (err, result) => {
        if (!err) {
            return MISC.responses(res, result);
        }else {
            return MISC.errorCustom(res, err);
        }
    })
}
