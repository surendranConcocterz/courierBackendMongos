import mongoose from 'mongoose';


const MongoConnect = () => {
    const mongoString = process.env.DATABASE_URL;
    console.log(mongoString);
    mongoose.connect(mongoString);
    const database = mongoose.connection;
    database.on('error', (error) => {
        console.log(error)
    })

    database.once('connected', () => {
        console.log('Database Connected');
    })
}

export default MongoConnect;
