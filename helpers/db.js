const mongoose = require("mongoose");

const db_uri = "mongodb+srv://emin:ySwIPtjRF2QoKerl@cluster0-g9puh.azure.mongodb.net/test?retryWrites=true&w=majority";

module.exports = () => {
	mongoose.connect(db_uri, { useNewUrlParser: true, useUnifiedTopology: true });

	mongoose.connection.on('open', () => {
		console.log('MongoDB: Connected');
	});

	mongoose.Promise = global.Promise;
}