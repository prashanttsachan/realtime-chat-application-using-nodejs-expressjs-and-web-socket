var express = require('express');
var router = express.Router();

router.get('/:page', function(req, res, next) {
	res.render(req.params.page, {page: 'Users Page', title: "New User registration" });
});

module.exports = router;
//var Book = require("../models").Book;
//const Sequelize = require('sequelize');
//const Op = Sequelize.Op;

/* GET books listing. */
//router.get('/:page', function(req, res, next) {
//	res.render("books/index", {books: books, title: "List of Books" });
	//Book.findAll({order: [["Year", "DESC"]]}).then(function(books){
	//	res.render("books/index", {books: books, title: "List of Books" });
	//}).catch(function(error){
	//	res.send(500, error);
	//});
//});

/* Create a new book form. */
//router.get('/new-book', function(req, res, next) {
//  res.render("books/new-book", {book: {}, title: "New Book"});
//});

/* POST create book.
router.post('/', function(req, res, next) {
  Book.create(req.body).then(function(book) {
    res.redirect("/books/" + book.id);
  }).catch(function(error){
      if(error.name === "SequelizeValidationError") {
        res.render("books/new-book", {book: Book.build(req.body), errors: error.errors, title: "New Book"})
      } else {
        throw error;
      }
  }).catch(function(error){
      res.send(500, error);
   });
});

/* GET individual book.
router.get("/:id", function(req, res, next){
  Book.findByPk(req.params.id).then(function(book){
    if(book) {
      res.render("books/update-book", {book: book, title: book.title});
    } else {
      const err = new Error('Book Not Found');
        res.render("error", { error: err });
    }
  }).catch(function(error){
      res.send(500, error);
   });
}); */

/* PUT update book.
router.put("/:id", function(req, res, next){
  Book.findByPk(req.params.id).then(function(book){
    if(book) {
      return book.update(req.body);
    } else {
      res.send(404);
    }
    //Updated book
  }).then(function(book){
    res.redirect("/books/" + book.id);
  }).catch(function(error){
      if(error.name === "SequelizeValidationError") {
        var book = Book.build(req.body);
        book.id = req.params.id;
        res.render("books/update-book", {book: book, errors: error.errors, title: "Update Book"})
      } else {
        throw error;
      }
  }).catch(function(error){
      res.send(500, error);
   });
}); */

/* Delete individual book.
router.delete("/:id", function(req, res, next){
  Book.findByPk(req.params.id).then(function(book){
    if(book) {
      return book.destroy();
    } else {
      res.send(404);
    }
  }).then(function(){
      res.redirect("/books");
  }).catch(function(error){
      res.send(500, error);
   });
}); */
