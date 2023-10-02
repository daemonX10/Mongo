// Chapter 5: Update Operators

db.mycol.drop();

db.mycol.insert({
 _id: ObjectId('7df78ad8902c'),
 title: 'MongoDB Overview',
 description: 'MongoDB is no sql database',
 by: 'tutorials point',
 url: 'http://www.tutorialspoint.com',
 tags: ['mongodb', 'database', 'NoSQL'],
 likes: 100
});

db.mycol.find();

// Chapter 7: Collections
// Section 7.1: Create a Collection

use("test");
db.createCollection("mycol");

// creatina a capped collection

/* The code `db.createCollection("clappedCollection",{capped:true,size:10000,max:5000});` is creating a
capped collection named "clappedCollection" in the current database. */
db.createCollection("clappedCollection",{capped:true,size:10000,max:5000});

db.cappedCollection.insert({name:"Damodar"});

db.cappedCollection.createIndex({accountNo:1});

db.adminCommand("listCollections");

db.adminCommand("listDatabases");

db.indexColl.find();

db.getCollectionNames();

db.cappedCollection.find();

db.cappedCollection.drop();

db.indexColl.drop();