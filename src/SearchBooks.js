import React, { Component } from "react";
//import PropTypes from 'prop-types';
import { Link } from "react-router-dom";
import * as BooksAPI from "./BooksAPI";

class SearchBooks extends Component {
  state = {
    books: [],
  };

  handleSearch = async (e) => {
    const searchValue = e.target.value;
    if (searchValue !== "") {
      const showBooks = await BooksAPI.search(e.target.value);
      this.setState({ books: showBooks });
    }
  };

  render() {
    const { books } = this.state;
    const { move } = this.props;
    const options = [
      { value: "currentlyReading", label: "Currently Reading" },
      { value: "read", label: "Read" },
      { value: "wantToRead", label: "Want To Read" },
      { value: "none", label: "None" },
    ];

    return (
      <div className="search-books">
        <div className="search-books-bar">
          <Link to="/" className="close-search">
            Close
          </Link>

          <div className="search-books-input-wrapper">
            {/*
              NOTES: The search from BooksAPI is limited to a particular set of search terms.
              You can find these search terms here:
              https://github.com/udacity/reactnd-project-myreads-starter/blob/master/SEARCH_TERMS.md

              However, remember that the BooksAPI.search method DOES search by title or author. So, don't worry if
              you don't find a specific author or title. Every search is limited by search terms.
            */}
            <input
              type="text"
              placeholder="Search by title or author"
              onChange={this.handleSearch}
            />
          </div>
        </div>

        <div className="search-books-results">
          <ol className="books-grid">
            {Array.isArray(books) ? (
              books.map((book) => (
                <li key={book.id}>
                  <div className="book">
                    <div className="book-top">
                      <div
                        className="book-cover"
                        style={{
                          width: 128,
                          height: 193,
                          backgroundImage: `url(${
                            book.imageLinks ? book.imageLinks.thumbnail : ""
                          })`,
                        }}
                      />
                      <div className="book-shelf-changer">
                        <select
                          defaultValue="none"
                          onChange={(e) => {
                            move(e, book);
                          }}
                        >
                          {/* this will loop through the options[] to display them*/}
                          {options.map((option) => (
                            <option
                              key={option.value}
                              value={option.value}
                              disabled={options[3].value === option.value}
                            >
                              {option.label}
                            </option>
                          ))}
                        </select>
                      </div>
                    </div>
                  </div>
                  <div className="book-title">{book.title}</div>
                  <div className="book-authors">{book.authors}</div>
                </li>
              ))
            ) : (
              <p>No search result</p>
            )}
          </ol>
          <div className="bookshelf-books" />
        </div>
      </div>
    );
  }
}
export default SearchBooks;
