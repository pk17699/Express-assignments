// book schema 
var Book = require('./schema/Schema');

let book1 = new Book({bookName:'react', bookAuthor: 'prashant', bookPrice: 400, bookPublisher: 'kfmfkmf'});
let book2 = new Book({bookName:'react', bookAuthor: 'kfkfmkf', bookPrice: 500, bookPublisher: 'v,fkvmkv'});
let book3 = new Book({bookName:'kfmvk', bookAuthor: 'fkmrf', bookPrice: 600, bookPublisher: 'kfmfkmf'});
let book4 = new Book({bookName:'kvmfkvm', bookAuthor: 'kfmrk', bookPrice: 700, bookPublisher: 'lv,b'});
let book5 = new Book({bookName:'bgbkgmbm', bookAuthor: 'kfrmmf', bookPrice: 100, bookPublisher: 'kfmfkmf'});

// function for adding single book
function addOneBook(book){
    Book.collection.insertOne(book)
    .then((data) => console.log(data))
    .catch((err) => console.log(err))
}

// function for adding multiple books
function addMultipleBooks(book2, book3, book4, book5){
    Book.collection.insertMany([book2, book3, book4, book5])
    .then((data) => console.log(data))
    .catch((err) => console.log(err))
}

// remove document based on object id
function removeObj(id){
    Book.findOneAndRemove({_id: id})
    .then(data => console.log(data))
    .catch(err => console.log(err))
}

// update document based on object id
function updateObj(id){
    Book.updateOne({_id:id}, {$set:{bookName:'ggggg', bookPublisher:'mmmmmmm'}}, {multi:true,new:true})
    .then(data => console.log(data))
    .catch(err => console.log(err))
}

// get all book by given name 
function getBookByName(name){
    Book.find({bookName:name})
    .then((doc)=>console.log(doc))
    .catch(err=>console.log(err))
}

// get all books where price > 500
function getBookByPrice(){
    Book.find({bookPrice: { $gt : 500}})
    .then((doc)=>console.log(doc))
    .catch(err=>console.log(err))
}

// get all books by given author
function getBookByAuthor(author){
    Book.find({bookAuthor:author})
    .then((doc)=>console.log(doc))
    .catch(err=>console.log(err))
}
