const MongoClient = require('mongodb').MongoClient;
var url = "mongodb://localhost:27017/properties_db/";
var customercollctions = require("./customercollection");
var propertiescollections = require("./propertiescollection");
MongoClient.connect(url, function(err, db) {
  if (err) throw err;
  console.log("Database created!");
  db.close();
});

url.exports = MongoClient;
