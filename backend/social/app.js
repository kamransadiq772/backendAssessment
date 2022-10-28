const express = require('express');
const dbSetup = require('./db/dbsetup');
// const { initConsumer } = require('./utilities/consumer');
const { initProducer } = require('./utilities/producer');
const userRoutes = require('./routes/userRoutes')
const tenantRoutes = require('./routes/tenantRoutes')
const {errorHandler} = require('./middlewares/errorMiddleware')
// const { connectConsumer } = require('./utilities/consumer');
// const { connectProducer, connectAdmin } = require('./utilities/producer');
// const KeyMaster = require('./utilities/KeyMaster');
// const databaseConfig = require('./database/DatabaseConfig');

const app = express();
dbSetup();

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// app.use(databaseConfig.initializeDB());

// app.use('/', async (req, res) => {

// 	res.status(200).json({ message: `App is running on port. ${process.env.PORT || 4000}` });

// });

app.use('/api/user',userRoutes)
app.use('/api/tenant',tenantRoutes)

app.use(errorHandler)


app.listen(process.env.PORT || 4000, async () => {
	
	console.log('App started at port', process.env.PORT || 4000);
	await initProducer();

});