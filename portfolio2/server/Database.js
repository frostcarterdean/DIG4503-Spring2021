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
	
	async createOne(ID, one, two, three, four, five, six, name) { // Works
		if (this.collection != null) {
			const result = await this.collection.insertOne({"Identify": ID, "first": one, "second": two, "third": three, "fourth": four, "fifth": five, "sixth": six, "name": name});
			return {"Identify": ID, "first": one, "second": two, "third": three, "fourth": four, "fifth": five, "sixth": six, "name": name};
		} else {
			return null;
		}
	}
	
	async readOne(ID) { 
		if (this.collection != null) {
			const result = await this.collection.findOne({"Identify": ID});
			return result;
		} else {
			return {"team": "not found"};
		}
	}
	
	async readMany() { 
		if (this.collection != null) {
			const result = await this.collection.find({});
			return result.toArray();
		} else {
			return {"team": "not found"};
		}
	}
	
	async updateOne(ID, one, two, three, four, five, six, name) { 
		if (this.collection != null) {
			const result = await this.collection.updateOne({"Identify": ID}, {$set: {"first": one, "second": two, "third": three, "fourth": four, "fifth": five, "sixth": six, "name": name}});
			return {"first": one, "second": two, "third": three, "fourth": four, "fifth": five, "sixth": six, "name": name};
		} else {
			return null;
		}
	}
	
	async deleteOne(ID) { 
		if (this.connection != null) {
			const result = await this.collection.deleteOne({"Identify": ID});
			return {"deleted": result.deletedCount};
		} else {
			return {"deleted": 0};
		}
	}
}
	
export default Database;