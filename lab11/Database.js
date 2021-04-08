import MongoClient from 'mongodb';

const URL = "mongodb+srv://CarterFrost:XSuz00k4sNnDk2IA@cluster0.yuzwq.mongodb.net";

class Database {
	constructor() {
		this.connection = null;
		this.database = null;
		this.collection = null;
	}
	
	async connect(database, collection) {
		this.connection = await MongoClient.connect(URL);
		this.database = this.connection.db(database);
		this.collection = this.database.collection(collection);
	}
	
	close() {
		
	}
	
	async createOne(ISBN, title, author, description) { // Works
		if (this.collection != null) {
			const result = await this.collection.insertOne({"ISBN": ISBN, "title": title, "author": author, "description": description});
			return {"ISBN": ISBN, "title": title, "author": author, "description": description};
		} else {
			return null;
		}
	}
	
	async readOne(ISBN) { // Works, but returns null instead of book: "not found" on Insomnia for no results
		if (this.collection != null) {
			const result = await this.collection.findOne({"ISBN": ISBN});
			return result;
		} else {
			return {"book": "not found"};
		}
	}
	
	readMany() { // idk
		
	}
	
	async updateOne(ISBN, title, author, description) { // Works, does not update ISBN but I'm pretty sure it's not required
		if (this.collection != null) {
			const result = await this.collection.updateOne({"ISBN": ISBN}, {$set: {"title": title, "author": author, "description": description}});
			return {"ISBN": ISBN, "title": title, "author": author, "description": description};
		} else {
			return null;
		}
	}
	
	async deleteOne(ISBN) { // Works 
		if (this.connection != null) {
			const result = await this.collection.deleteOne({"ISBN": ISBN});
			return {"deleted": result.deletedCount};
		} else {
			return {"deleted": 0};
		}
	}
}
	
export default Database;