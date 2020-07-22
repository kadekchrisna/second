const async = require('async');

const Question = require('../services/question');
const redisCache = require('../lib/RedisCache');


/*
*   GET : '/question/'
*   
*   desc: getting all question with async await 
*
*   @param {object} req - Parameters for request
*
*   @return {object} questions or error
*/
exports.index = async(req, res, next) => {

    // const key = 'get-questions';
    try {
        const question = await Question.get();
        return MR.getMessageQuery(res, question, 200, true, 1);
        // return MISC.responses(res, question);
    } catch (error) {
        return MISC.errorCustom(res, error);
    }

    // async.waterfall([
    //     (cb) => {
    //         redisCache.get(key, result => {
    //             if (result) {
    //                 return MISC.responses(res, result);
    //             } else {
    //                 cb(null);
    //             }
    //         })
    //     },
    //     (cb) => {
    //         Question.get().then(result => {
    //             redisCache.setex(key, 1800, result);
    //             console.log(`${key} successfully cached`);
    //             cb(null, result);
    //         }).catch(err => cb(err, null));
    //     }
    // ], (err, result) => {
    //     if (!err) {
    //         return MISC.responses(res, result);
    //     } else {
    //         return MISC.errorCustom(res, err);
    //     }
    // })
}



/*
*   GET : '/question/all'
*   
*   desc: getting all users and store the result data in redis (test response time)
*
*   @param {object} req - Parameters for request
*
*   @return {object} questions or error
*/
exports.showAllQuestion = (req, res, next) => {
    const key = 'get-question-all';
    async.waterfall([
        (cb) => {
            redisCache.get(key, result => {
                if (result) {
                    console.log('redis');
                    return MISC.responses(res, result);
                } else {
                    cb(null);
                }
            });
        },
        (cb) => {
            Question.getAll((err, result) => {
                redisCache.setex(key, 1800, result);
                console.log(`${key} successfully cached`);
                cb(err, result);
            });
        }
    ], (err, result) => {
        if (!err) {
            return MISC.responses(res, result);
        } else {
            return MISC.errorCustom(res, err);
        }
    })
}

