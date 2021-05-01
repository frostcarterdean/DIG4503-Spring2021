import CORS from 'cors';
import Express from 'express';
import Database from './Database.js';

const App = Express();
const port = 45030;

App.use(CORS());
App.use(Express.json());

const db = new Database();

db.connect("portfolio2", "CarterFrost");

// PUT (App.put() ) -> Database.createOne() -> collection.insertOne();
// X
/*
App.put("/books/:ISBN", async (req, res) => {
	const ISBN = req.params.ISBN;

	const title = req.body.title;
	const author = req.body.author;
	const description = req.body.description;
	
	/*
	
	res.json({
		ISBN: ISBN,
		title: title,
		author: author,
		description: description
	});
	
	
	const result = await db.createOne(ISBN, title, author, description);
	
	res.json(result);
	
});
*/

App.put("/CarterFrost/:Identify", async (req, res) => {
	const ID = req.params.Identify;
	
	const one = req.body.first;
	const two = req.body.second;
	const three = req.body.third;
	const four = req.body.fourth;
	const five = req.body.fifth;
	const six = req.body.sixth;
	const name = req.body.name;
	
	const result = await db.createOne(ID, one, two, three, four, five, six, name);
	
	res.json(result);	
});

// GET (App.get() ) -> Database.readOne() -> collection.findOne()
// X
App.get("/CarterFrost/:Identify", async (req, res) => {
	const ID = req.params.Identify;
	
	const one = req.body.first;
	const two = req.body.second;
	const three = req.body.third;
	const four = req.body.fourth;
	const five = req.body.fifth;
	const six = req.body.sixth;
	
	const result = await db.readOne(ID);
	
	res.json(result);	
});

// POST (App.post() ) -> -> collection.find()
// App.post
App.post("/CarterFrost", async (req, res) => {
	
	const result = await db.readMany();
	
	res.json(result);
});

// PATCH (App.patch() ) -> Database.updateOne() -> collection.updateOne()
// X
App.patch("/CarterFrost/:Identify", async (req, res) => {
	const ID = req.params.Identify;
	
	const one = req.body.first;
	const two = req.body.second;
	const three = req.body.third;
	const four = req.body.fourth;
	const five = req.body.fifth;
	const six = req.body.sixth;
	const name = req.body.name;
	
	const result = await db.updateOne(ID, one, two, three, four, five, six, name);
	
	res.json(result);
});

// DELETE (App.delete() ) -> Database.deleteOne() -> collection.deleteOne()
// X
App.delete("/CarterFrost/:Identify", async (req, res) => {
	const ID = req.params.Identify;
		
	const result = await db.deleteOne(ID);
	
	res.json(result);
});

App.listen(port);