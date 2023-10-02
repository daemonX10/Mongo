// Chapter 8: Aggregation
db.orders.aggregate( [

   // Stage 1: Filter pizza order documents by pizza size
   {
      $match: { size: "medium" }
   },

   // Stage 2: Group remaining documents by pizza name and calculate total quantity
   {
      $group: { _id: "$name", totalQuantity: { $sum: "$quantity" } }
   }

] );

db.airnb.aggregate([
    {$group:{
        _id:"$address.country",
        count:{$sum:1}
    }}
]);

db.airnb.aggregate([
    {$group:{
        _id:"$address.country",
        count:{$sum:1}
    }}
]);

db.airnb.find();

// 8.2 sum

db.airnb.aggregate([
    {
        $group:{
            _id:'$address.country',
            count:{$sum:1}
        }
    }
])

// to find each thing present how many times

// db.airnb.aggregate([
//   {
//     $unwind: "$amenities"
//   },
//   {
//     $group: {
//       _id: "$amenities",
//       count: { $sum: 1 }
//     }
//   }
// ])

db.airnb.aggregate([
  {
    $project: {
      amenitiesCount: { $size: "$amenities" }
    }
  }
])

