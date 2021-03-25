import MongoClient from 'mongodb';

const URL = "mongodb+srv://CarterFrost:XSuz00k4sNnDk2IA@cluster0.yuzwq.mongodb.net";

MongoClient.connect(URL, { useUnifiedTopology: true })
.then(connection => {
	let database = connection.db("sample_airbnb");
	let collection = database.collection("listingsAndReviews");
	
	let cursor = collection.find({"review_scores.review_scores_rating": {$gte: 99}, price: {$lte: 200}, beds: {$gte: 5}});
	
	cursor.forEach(document => {
		console.log(document);
	}, () => {
		connection.close();
	});
})

.catch(error => {
	console.log("Error: " + error);
});