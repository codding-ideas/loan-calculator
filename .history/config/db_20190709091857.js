


const mongoose = require('mongoose');
const config = require('config');
const db = config.get('mongoURI');

const connectDB = async () => {
    try {
        await mongoose.connect(db, {
            useNewUrlParser:true,
            useCreateIndex: true,
            useFindAndModify: false
        })
        console.log('Mongodb Connected')
    } catch (error) {
        console.log(error.message)
    }
};

module.exports = connectDB;