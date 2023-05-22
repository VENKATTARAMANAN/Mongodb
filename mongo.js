Question-1
// 1. Find all the information about each products

db.queries.find({}).toArray()

Question-2
// 2.Find the product price which are between 400 to 800

db.queries.find({ product_price : { $gt :  400, $lt : 800}});

Question-3
// 3.Find the product price which are not between 400 to 600

db.queries.find({ product_price :{$not: {$gt :  400, $lt : 800}}});

Question-4
// 4.List the four product which are grater than 500 in price 

db.queries.find({ product_price :{$gt :  400}}).limit(4);

Question-5
// 5.Find the product name and product material of each products

db.queries.find({},{_id:0,product_name: 1,product_material:1})

Question-6
// 6.Find the product with a row id of 10

db.queries.find({id:"10"});

Question-7
// 7.Find only the product name and product material

db.queries.find({},{_id:0,product_name: 1,product_material:1})

Question-8
// 8.Find all products which contain the value of soft in product material 

db.queries.find({product_material:'Soft'})

Question-9
// 9.Find products which contain product color indigo  and product price 492.00

db.queries.find({},{product_color: 'indigo',product_price: 492})

Question-10
// 10.Delete the products which product price value are same

 db.queries.aggregate([
    { "$group": { "_id": "$product_price", "count": { "$sum": 1 } } },
    { "$match": { "_id": { "$ne": null }, "count": { "$gt": 1 } } },
    { "$project": { "duplicate": "$_id", "_id": 0 } }
])