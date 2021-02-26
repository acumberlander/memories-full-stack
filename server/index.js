import express from 'express';
import bodyParser from 'body-parser';
import mongoose from 'mongoose';
import cors from 'cors';
import dotenv from 'dotenv';
import postRoutes from './routes/posts.js';
import userRoutes from './routes/user.js';

// app config
const app = express();
dotenv.config();

// middlewares
app.use(bodyParser.json({ limit: '30mb', extended: true }));
app.use(bodyParser.urlencoded({ limit: '30mb', extended: true }));
app.use(cors());

// api routes
app.use('/posts', postRoutes);
app.use('/user', userRoutes);
app.get('/', (req, res) => {
	res.send('Hello to Memories API');
});

// DB config
const PORT = process.env.PORT || 5000;

mongoose
	.connect(process.env.CONNECTION_URL, {
		useNewUrlParser: true,
		useUnifiedTopology: true,
	})
	.then(() =>
		app.listen(PORT || 5000, () =>
			console.log(`Server running o port: ${PORT}`)
		)
	)
	.catch((error) => console.log(error.message));

mongoose.set('useFindAndModify', false);

//HTTPS://WWW.MONGODB.COM/CLOUD/ATLAS
