exports.handler = function(event, context, callback) {
    callback(null, {
        status = 200,
        body: "hello, lambda functions!"
    });
}