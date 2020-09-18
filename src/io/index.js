const dynamo = require('./dynamoDB');
const swapi = require('./swapi');

const handler = {
    input: event => event.data,
    returnSuccess: result => ({
        statusCode: 200,
        body: result
    }),
    returnError: result => ({
        statusCode: 500,
        body: result
    })
}

module.exports = {
    handler: handler,
    db: dynamo,
    swapi: swapi,
    events: {}
}