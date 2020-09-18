'use strict';
const io = require('./src/io');
const service = require('./src/service');

module.exports.fan = async (event, context, callback) => {
  try {
    const input = io.handler.input(event);
    const result = await service(io).createFan(input);
    callback(null, io.handler.returnSuccess(result));
  } catch(err) {
    callback(null, io.handler.returnError({ message: process.env.ERROR_MSG }));
  }
};

module.exports.fans = async (event, context, callback) => {
  try {
    const input = io.handler.input(event);
    const result = await service(io).listFans(input);
    callback(null, io.handler.returnSuccess(result));
  } catch(err) {
    callback(null, io.handler.returnError({ message: process.env.ERROR_MSG }));
  }
};
