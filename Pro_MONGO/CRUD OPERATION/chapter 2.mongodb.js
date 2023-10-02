db;

db.people.insertOne({
    name:"Tom",
    age:28
});

db.people.insertOne({name:"damodar",age:20})


db.people.insertMany([{ //insert many
    name:"tom",age:200
},
{
    name:"jerry",age:300
},
{
    name:"john",age:20
},
{
    name:"kathy",age:20
}]
);

// Section 2.2 update

db.people.updateOne({name:"damodar"},{$set:{age:21,name:"yadav"}});

db.people.find({name:"yadav"}).pretty();

/* The `{multi:true}` option allows the update to be applied to multiple documents
that match the query criteria. */
db.people.update({name:"yadav"},{$set:{age:30}},{multi:true});

db.people.updateMany({age:20},{$set:{age:21,name:"God"}});

db.people.find({name:"Laxman"}).pretty();

db.people.updateMany({age:21},{$set:{age:30,salary:100000,married:false,}});

db.people.replaceOne({name:"God"},{name:"Laxman",age:25,address:"Sri Ram"},{multi:true})


// # DELETE 

db;

db.people.insertOne({name:"yadav", age:20,college:"Tcet",status:"Non-Working "});

db.people.deleteMany({name:"yadav"});


db.people.find({name:"yadav"}).pretty();

db.people.remove({name:"yadav"})

// MongoDB's remove() method. If you execute this command without any argument or without empty argument it will remove all documents from the collection.
db.people.remove(); 
db.people.remove({});

// SECTION 2.4 : READ

db.people.find({name:"Tom"});

db.people.find();

// You can also specify which fields to return by passing a field selection parameter. The following will exclude the _id field and only include the age field:
db.people.find({name:"Tom"},{_id:0,age:1,name:2});

use("airnb");
db.data.find({address:"US"},{"_id":0,"address":1});

db.data.findOne({address:""});

use('airnb');
db.data.countDocuments();

db.getCollectionNames();
db;
airnb.data.countDocuments();

db.data.find({address:"US"});

use('airnb')
db.data.find({}, {_id: false, "address.country": true});

use('airnb')
db.data.find({'address.country':'United States'},{_id:0,name:1});

use('airnb');
db.data.find({},{_id:0,name:1}).countDocuments();

db.people.insertOne({name:"damodar",age:28,marks:[50,60,70]});

db.people.find({name:"damodar"}).pretty();

db.people.remove({name:"damodar"});

// Section 2.5: Update of embedded documents
db.people.update({name:"damodar",marks:50},{$set:{marks:100}}); // update complete marks array with 100

db.people.updateOne({name:"damodar"},{$set:{"marks.0":100}});

// For the following schema: 
//{name: 'Tom', age: 28, marks: [{subject: "English", marks: 90},{subject: "Maths", marks: 100},
// {subject: "Computes", marks: 20}]}

db.people.insertOne({name:"nikesh",age:20,marks:[{subject:"English",marks:81},{subject:"Maths",marks:100},{subject:"Computes",marks:20}]}); // insert

db.people.updateOne({name:"nikesh","marks.subject":"English"},{$set:
{
    "marks.$.marks":90
}});

db.people.find({name:"nikesh"}).pretty();

db.people.deleteOne({name:"nikesh",marks:90});

/* The code `db.people.updateOne({name:"nikesh"},{:{marks:{marks:90}}});` is updating the document
in the "people" collection where the name is "nikesh". It is using the `` operator to remove an
element from the "marks" array where the "marks" value is 90. */
db.people.updateOne({name:"nikesh"},{$pull:{marks:{marks:90}}});

db.people.find({name:"nikesh"}).pretty();

db.people.updateOne({name:"nikesh"},{$pull:{marks:{marks:20}}});

db.people.updateOne({name:"nikesh","marks.subject":"English"},{$set:{"marks.$.marks":90}});

db.student.insertMany([{
    _id:1,grades:[80,85,90]},{
    _id:2,gardes:[88,90,92]},{
    _id:3,gardes:[85,100,90]
    }]);

db.student.updateOne({_id:1,grades:80},{$set:{"grades.$":82}});

db.people.find();

// Section 2.6: More update operators

db.people.update({name:"nikesh"},{$push:{nicknames:"Golu"}});

db.people.updateOne({name:"nikesh"},{$pull:{nicknames:"Golu"}});

db.people.updateOne({name:"nikesh",nicknames:"Golu"},{$set:{"nicknames.$":"Golululu"}})

db.people.updateOne({name:"nikesh"},{$push:{sibling:["devendra","nikhil","me"]}});


db.people.find({name:"nikesh"});

/* The code `db.people.updateOne({name:"nikesh"},{:{sibling:1}});` is updating the document in the
"people" collection where the name is "nikesh". It is using the `` operator to remove the last
element from the "sibling" array. */
db.people.updateOne({name:"nikesh"},{$pop:{sibling:1}});

db.people.updateOne({ _id: ObjectId("6519908b924dd27001862b7b") }, { $pop: { sibling: -1 } })

// Section 2.7: "multi" Parameter while updating multipledocuments

// syntax
db.people.update(
    query,
    update,{
        upsert:Boolean,
        multi:Boolean,
        writeConcern:document
    }
)

db.people.update({},{$set:{
    title:"New mongoDB Tutoria"
}},{multi:1,upsert:1,writeConcern:1})

db.people.find();


