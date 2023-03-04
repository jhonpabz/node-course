const mongodb = require('mongodb');
const mongoClient = mongodb.mongoClient;

const connectionURL = 'mongodb://127.0.0.1:27017';
const database = 'task-manager';

mongoClient.connect(connectionURL, { useNewUrlParser: true }, () => {});
