import React from 'react';
//import {Link } from 'react-router-dom';
import * as BooksAPI from './BooksAPI';

class ListBooksManualwantToRead extends React.Component {


  handleChange = (e, book)  => {
    const shelf = e.target.value
   console.log(book,shelf)
 BooksAPI.update(book,shelf)  
}


  render(){

    this.state = {
      options:[
        'currentlyReading',
        'wantToRead',
        'read'
       ]
    }
    //console.log('prop', this.props)
    return(
            <div className="bookshelf">
                <h2 className="bookshelf-title">Want to Read</h2>
                <div className="bookshelf-books">
                  <ol className="books-grid">

                    {this.props.books.filter((book) => 
                    book.shelf === 'wantToRead'
                    ).map((book)=> ( 
                    <li key ={book.title}>
                      <div className="book">
                        <div className="book-top">
                          <div className="book-cover" 
                          style={{ 
                              width: 128, height: 193, 
                              backgroundImage: 
                        `url(${book.imageLinks.thumbnail})`
                              }}>

                              </div>
                          <div className="book-shelf-changer">
                          <select 
                            defaultValue = {this.state.options[2]} 
                            onChange=  {(e)=> this.handleChange(e, book)}>

                                {/* this will loop through the options[] to display them*/}
                              {this.state.options.map((option)=> (
                                <option key = {option} value ={option}>{option}</option>
                              ))}

                            </select>
                          </div>
                        </div>
                        <div className="book-title">{book.title}</div>
                        <div className="book-authors">{book.authors}</div>
                      </div>
                     
                    </li>
                    )
                    )}  
                </ol>
            </div>
        </div>

        )
}
}
export default ListBooksManualwantToRead;