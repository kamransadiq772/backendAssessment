const User = require('../db/modals/user')
const MSG = require('../db/modals/msg')
const processMessage = async (kafkaMessage) => {

	//Start working here
	console.log(kafkaMessage);

	try {
		await MSG.query().insert({
			msg:JSON.stringify(kafkaMessage)
		})
		console.log("Message Inserted");
	} catch (error) {
		console.log(error);
	}
};

module.exports = { processMessage };

