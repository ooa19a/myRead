import React from 'react';
//import {Link } from 'react-router-dom';
import * as BooksAPI from './BooksAPI';

class ListBooksManualCurrentlyReading extends React.Component {

  
  
// newComponentDidMountPromise = () => {
//   return new Promise ((resolve, reject) => {
//     function componentDidMount(){
//       BooksAPI.getAll().then((books) => {
//         //console.log(books)
//         this.setState(() => ({books}))
//       })
//     }
//   }) 
// }

// componentDidMount(){
//   BooksAPI.getAll().then((books) => {
//     //console.log(books)
//     this.setState(() => ({books}))
//   })
// }


handleChange = (e, book)  => {
  const shelf = e.target.value
  console.log(book,shelf)
  BooksAPI.update(book,shelf)  
}


state = {
  options:[
    'currentlyReading',
    'wantToRead',
    'read'
  ]
}

//funtion to update the state of the options[]. The goal is to make the page re-render
updatestateofbook = (e) => {
  console.log(e.target.value)
  //const value = e.target.value;
  this.setState((prevstate) => ({
     options: prevstate.options
  }))
}

//combine the two above funtions. The goal is to pass this funtion to onChange 
combinefun = (e,book) => {
  this.handleChange(e,book)
  this.updatestateofbook(e)
}

render(){   

    //console.log('prop', this.props)

//desturturing 
    const {books} =this.props
    const {options} = this.state

    return(
        <div className="list-books">
          <div className="list-books-title">
            <h1>MyReads</h1>
          </div>

              <div className="bookshelf">
                  <h2 className="bookshelf-title">Currently Reading</h2>
                  <div className="bookshelf-books">
                    <ol className="books-grid">

                      {books.filter((book) => 
                      book.shelf === 'currentlyReading'
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
                                    //defaultValue = 'currentlyReading'
                                    //{this.state.options[0]} 
                                    onChange = {(e)=> {
                                      this.combinefun(e,book);
                                     //this.handleChange(e, book); 
                                     //this.updatestateofbook(e);
                                        }}>

                                        {/* this will loop through the options[] to display them*/}
                                      {options.map((option)=> (
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

        </div>
    )
}
}
export default ListBooksManualCurrentlyReading;