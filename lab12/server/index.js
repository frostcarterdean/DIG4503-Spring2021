/*

import Express from 'express';
import CORS from 'cors';

const App = Express();
const port = 45030;

App.use(CORS());
App.use(Express.json());

// PUT: "/parts/:sku" (Request Body)
App.put("/parts/:sku", (req, res) => {
	const sku = req.params.sku;
	
	// req.body
	res.json();
});

App.get("/parts/:sku", (req, res) => {
	const sku = req.params.sku;
});

App.patch("/parts/:sku", (req, res) => {
	const sku = req.params.sku;
});

App.delete("/parts/:sku", (req, res) => {
	const sku = req.params.sku;
});

App.listen(port, () => {
	console.log("Server is running");
});

*/

// PUT (X)
// GET (X)
// POST 
// PATCH (X)
// DELETE (X)

import CORS from 'cors';
import Express from 'express';
import Database from './Database.js';

const App = Express();
const port = 45030;

App.use(CORS());
App.use(Express.json());

const db = new Database();

db.connect("lab11", "books");

// PUT (App.put() ) -> Database.createOne() -> collection.insertOne();
// X
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
	
	*/
	
	const result = await db.createOne(ISBN, title, author, description);
	
	res.json(result);
	
});

// GET (App.get() ) -> Database.readOne() -> collection.findOne()
// X
App.get("/books/:ISBN", async (req, res) => {
	const ISBN = req.params.ISBN;
	
	const title = req.body.title;
	const author = req.body.author;
	const description = req.body.description;
	
	const result = await db.readOne(ISBN);
	
	res.json(result);	
});

// POST (App.post() ) -> -> collection.find()
// App.post

// PATCH (App.patch() ) -> Database.updateOne() -> collection.updateOne()
// X
App.patch("/books/:ISBN", async (req, res) => {
	const ISBN = req.params.ISBN;
	
	const title = req.body.title;
	const author = req.body.author;
	const description = req.body.description;
	
	const result = await db.updateOne(ISBN, title, author, description);
	
	res.json(result);
});

// DELETE (App.delete() ) -> Database.deleteOne() -> collection.deleteOne()
// X
App.delete("/books/:ISBN", async (req, res) => {
	const ISBN = req.params.ISBN;
	
	const title = req.body.title;
	const author = req.body.author;
	const description = req.body.description;
	
	const result = await db.deleteOne(ISBN);
	
	res.json(result);
});

App.listen(port);