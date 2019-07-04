const misc = {
    responses: (res, obj, status, success, message) => {
        let result = {};
        let extras = {};

        result.status = status || 400;
        extras.success = success,
        extras.msg_code = message.msg_status_code,
        extras.msg_client = message.msg_client,
        extras.msg_server = message.msg_server,
        extras.data = obj;
        const responses = Object.assign(result, extras);
        return res.status(result.status).send(responses);
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