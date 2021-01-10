import React from 'react';
//import { Multiselect } from 'multiselect-react-dropdown';
//import MultiSelect from "react-multi-select-component";
import {Link } from 'react-router-dom';
import * as BooksAPI from './BooksAPI';

class ListBooksManualRead extends React.Component {

  state = {
    options:[
      'currentlyReading',
      'wantToRead',
      'read' ]
  }


  // changeToCurrentlyReading = (e) => {
  //   //e.preventDefault()
  //   return this.props.books.shelf === 'currentlyReading'
  //     }

  //     displayWhatWasSelected = function (value){
  //       console.log(value);
  //   }
    
    // state = {
    //   shelf: 'read'
    // }
    
    
  handleChange = (e, book)  => {
     const shelf = e.target.value
    console.log(book,shelf)
    BooksAPI.update(book,shelf)  
}


 render(){


    //console.log('prop', this.props)

    

    //destructuring 

    const {books} = this.props

    // const shelf = this.e.target.value
    return(
            <div className="bookshelf">
                <h2 className="bookshelf-title">Read</h2>
                <div className="bookshelf-books">
                  <ol className="books-grid">
                    {/* This is going to filter through the books[] to return only the books in the "read" shelf and map through the new array */}
                    {books.filter((book) => 
                    book.shelf === 'read'
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
                <div className="open-search">
                <Link to ='/search' className="open-search">Add a book</Link>

                {/* <button onClick={() => this.setState({ showSearchPage: true })}>Add a book</button> */}
              </div>
            </div>
        </div>

        )
        
}

}
export default ListBooksManualRead;