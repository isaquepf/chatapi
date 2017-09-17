var config = {};

config.port = process.env.PORT || 4000;
config.mongoUri = process.env.MONGOLAB_URI || 'mongodb://localhost/chatdemo';

module.exports = config;