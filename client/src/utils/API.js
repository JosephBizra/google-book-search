import axios from "axios";

export default {
  // Gets all books
  getBooks: function() {
    return axios.get("/api/books");
  },
  // Gets the book with the given id
  getBook: function(id) {
    return axios.get("/api/books/" + id);
  },
  // Deletes the book with the given id
  deleteBook: function(id) {
    return axios.delete("/api/books/" + id);
  },
  // Saves a book to the database
  saveBook: function(bookData) {
    return axios.post("/api/books", bookData);
  },


  findAll: function(SOMETHING_NEEDS_TO_GO_HERE) {
    console.log("API findAll")
    return axios
      .get("https://www.googleapis.com/books/v1/volumes?q=" + SOMETHING_NEEDS_TO_GO_HERE)
  }
};
