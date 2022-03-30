import mongoose from 'mongoose'

const MONGO_URI = 'mongodb+srv://MyUsername:MyPassword@cluster0.dq2eh.mongodb.net/JWT_TEST?retryWrites=true&w=majority';

const connectDB = async () => {
    try {
        const conn = await mongoose.connect(MONGO_URI, {
            useNewUrlParser: true,
            useUnifiedTopology: true,
        })

        console.log(`MongoDB Connected: ${conn.connection.host}`)
    } catch (error) {
        console.error(`Error: ${error.message}`)
        process.exit(1)
    }
}

export default connectDB