const app = require('./app');
const MongoClient = require("mongodb").MongoClient;
const ObjectId = require("mongodb").ObjectID;
const CONNECTION_URL ="mongodb://mongouser:mongopassword@172.30.101.190:27017/" ;
const DATABASE_NAME = "mydb";
const server = app.listen(3000, () => {
      MongoClient.connect(CONNECTION_URL, { useNewUrlParser: true }, (error, client) => {
        if(error) {
            throw error;
        }
        database = client.db(DATABASE_NAME);
        collection = database.collection("homepage");
        console.log("Connected to `" + DATABASE_NAME + "`!");
    });
});
