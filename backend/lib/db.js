import mongoose from "mongoose";

export const connectDB = async () => {
	try {
		const conn = await mongoose.connect("mongodb+srv://rjsingh4997:2CtDQ4RwsVwTYi6a@cluster0.mjrqg.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0");
		console.log(`MongoDB connected: ${conn.connection.host}`);
	} catch (error) {
		console.error(`Error connecting to MongoDB: ${error.message}`);
		process.exit(1);
	}
};

