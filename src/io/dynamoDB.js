const aws = require('aws-sdk');
const db = new aws.DynamoDB.DocumentClient({
    region: 'us-east-1'
});
const models = require('./models');

module.exports = {
    put: async data => {
        const params = {
            TableName: process.env.FAN_TABLE,
            Item: models.fans(data.name, data.lastName, data.age, data.favoriteCharacters)
        }
        const res = await db.put(params).promise();
        return res;
    },
    get: async keys => {
        const params = {
            TableName: process.env.FAN_TABLE,
            Key: keys
        }
        const data = await db.get(params).promise();
        return data.Item;
    },
    getAll: async () => {
        const params = {
            TableName: process.env.FAN_TABLE
        }
        const data = await db.scan(params).promise();
        return data.Items;
    }
}