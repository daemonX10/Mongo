// const { Collection } = require("mongoose");

db.getMongo().getDBs();

use("pro_mongodb"); 

db.getCollectionNames();

db.createCollection("basic");

db.test.insertOne({"key1":"value","key2":"val2","key3":"val3"});
db.test.insertOne({"key1":"vlaue2","key":"val21","key3":"val31"});
db.test.insertOne({
    "key1":"val3","key2":"val22","key3":"val33"
})

db.test.find().pretty();

// _______________________________________________  // 

db.mydb.help();

db; // To check your currently selected database

db.dropDatabase();

db.world.insertOne({"speech":"Hello world"});

cur=db.world.find();x=cur.next();print(x["speech"]); // to  print the value of speech





