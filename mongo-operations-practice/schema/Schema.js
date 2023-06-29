const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost:27017/mongoDB-crud')
.then(() => console.log('connected to mongoDB...'))
.catch(err => console.error('could not connect to mongoDB...', err))

const bookSchema = mongoose.Schema({
    bookName : String,
    bookAuthor : String,
    bookPrice : Number,
    bookPublisher : String
});

module.exports = mongoose.model('Book',bookSchema);