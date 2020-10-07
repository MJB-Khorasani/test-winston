module.exports.asyncMiddlewareHandler = fn => (req, res, next) => 
    Promise
        .resolve(fn(req, res, next))
        .catch(next);

module.exports.promiseHandler = promise => {
    return promise.then(data => [null, data]).catch(error => [error]);
};
