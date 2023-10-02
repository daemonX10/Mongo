
// Chapter 3: Getting database information

db.getCollectionNames();

db.getCollectionInfos();

//Section 3.2: List all databases

// show dbs;

db.adminCommand('listDatabases'); // this will give complete info

db.getMongo().getDBNames(); // only database name

// Chapter 4: Querying for Data (GettingStarted)

// section 4.1: find()

db.people.updateOne({name:"nikesh"},{$set:{age:28}});
db.people.find();

db.people.find({
    $and:[
        {age:28},{title:"New mongoDB Tutoria"}
    ]
});

// or
db.people.find({
    $or:[
        {name:"nikesh"},{name:"damodar"}
    ]
}).count();

db.people.find({name:{$not:{$eq:"damodar"}}});
db.people.find({ name: { $not: { $eq: "damodar" } } });

// Section 4.3: limit, skip, sort and count the results of the find()method

db.airnb.find({},{name:1}).limit(3).pretty();

db.status.insertMany([
    {name:"Any", age:"21", status:"busy"},
    {name:"Tony", age:"25", status:"busy"},
    {name:"Bobby", age:"28", status:"online"},
    {name:"Sonny", age:"28", status:"away"},
    {name:"Cher", age:"20", status:"online"}
]);

db.status.find();

db.status.drop();

db.status.find().sort({name:1}).skip(2); // skip first 2

db.status.find({}).sort({name:-1}).skip(1).limit(2);

// Section 4.4: Query Document - Using AND, OR and INConditions

db.student.drop();

db.student.insertMany([{
    "_id" : ObjectId("58f29a694117d1b7af126dca"),
    "studentNo" : 1,
    "firstName" : "Prosen",
    "lastName" : "Ghosh",
    "age" : 25
},
{
    "_id" : ObjectId("58f29a694117d1b7af126dcb"),
    "studentNo" : 2,
    "firstName" : "Rajib",
    "lastName" : "Ghosh",
    "age" : 25
},
{
    "_id" : ObjectId("58f29a694117d1b7af126dcc"),
    "studentNo" : 3,
    "firstName" : "Rizve",
    "lastName" : "Amin",
    "age" : 23
},
{
    "_id" : ObjectId("58f29a694117d1b7af126dcd"),
    "studentNo" : 4,
    "firstName" : "Jabed",
    "lastName" : "Bangali",
    "age" : 25
},
{
    "_id" : ObjectId("58f29a694117d1b7af126dce"),
    "studentNo" : 5,
    "firstName" : "Gm",
    "lastName" : "Anik",
    "age" : 23
}]);

db.student.find().pretty();
db.student.find().sort({studentNo:1}).pretty();

db.student.find().skip(1).limit(2).pretty();

// or queries

db.student.find({
    $or:[
        {firstName:"Prosen"},{age:{$gte:23}}
    ]
})

// in queries

db.student.find({lastName:{$in:["Ghosh","Amin"]}});

// Section 4.5: find() method with Projection

// db.collection.find(query, projection)

db.people.find({},{age:0});

// Section 4.6: Find() method with Projection

db.people.find({},{name:1,_id:0});

