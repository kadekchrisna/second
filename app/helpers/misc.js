const misc = {
    responses: (res, obj, status, extras) => {
        let result = {};
        result.status = status || 200;
        if (_.isObject(obj)) {
            result.data = obj;
        } else {
            result.message = obj;
        }

        if (_.isObject(extras)) {
            Object.assign(result.extras, extras);
        }
        return res.status(result.status).send(result);
    },
    errorCustom: (res, err, status) => {
        let errResult = {};
        errResult.status = _.result(err, 'status') || 400;
        errResult.errors = {}

        if (_.isObject(err)) {
            errResult.errors.message = _.result(err, 'message') || _.result(err, 'msg') || 'Bad Request';
            errResult.errors.fields = err;
        } else {
            errResult.status = status;
            errResult.message = err;
            errResult.errors.message = err || 'The server encountered an unexpected condition which prevented it from fulfilling the request.';
        }
        return res.status(errResult.status).send(errResult);
    },
    notFound: (res, message) => {
        let result = {};
        result.errors = {
            message: message || 'Sorry, that page does not exist'
        };
        result.status = 404;
        return res.status(404).send(result);
    }
}

module.exports = misc;