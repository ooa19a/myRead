import React from "react";
import * as BooksAPI from "./BooksAPI";
import "./App.css";
import { Route, withRouter } from "react-router-dom";
import SearchBooks from "./SearchBooks";
import ListBooksManualCurrentlyReading from "./ListBooksManualCurrentlyReading";
import ListBooksManualwantToRead from "./ListBooksManualwantToRead";
import ListBooksManualRead from "./ListBooksManualRead";
import ListBooks from "./ListBooks";

class BooksApp extends React.Component {
  //function BooksApp(){

  //}

  /**
   * TODO: Instead of using this state variable to keep track of which page
   * we're on, use the URL in the browser's address bar. This will ensure that
   * users can use the browser's back and forward buttons to navigate between
   * pages, as well as provide a good URL they can bookmark and share.
   */

  state = {
    books: [],
    bookshelfff: [],
  };

  componentDidMount() {
    BooksAPI.getAll().then((books) => {
      this.setState(() => ({ books }));
    });
  }

  // //i am trying to display the available book shelf
  //   bookshelf = () => {
  //    this.state.books.map(book =>{
  //     //  this.state.bookshelfff.push([book.shelf])
  //     //  console.log(book.shelf)
  //      //return book.shelf
  //    })
  //   }

  //push the select shelf into the bookshelf array -Original It works

  handleChange = async (e, book) => {
    const shelf = e.target.value;
    console.log(shelf, book);
    try {
      await BooksAPI.update(book, shelf);
      const books = await BooksAPI.getAll()
        //console.log([books])
        this.setState({ books });
    } catch (err) {
      console.log(err);
    }
  };

  render() {
    return (
      <div className="app">

        <Route
          exact
          path="/search"
          render ={() => (
            <SearchBooks 
            move={this.handleChange}
          
        />
        )}
          />
        <Route
          exact
          path="/"
          render={({ history }) => (
            <ListBooks
              books={this.state.books}
              move={this.handleChange}
              history = {history}
            />
          )}
        />       
       
      </div>
    );
  }
}

export default withRouter(BooksApp);
