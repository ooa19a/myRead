import React from 'react';
import * as BooksAPI from './BooksAPI';
import './App.css'
import { Link, Route } from 'react-router-dom'
import SearchBooks from './SearchBooks';
import ListBooksManualCurrentlyReading from './ListBooksManualCurrentlyReading';
import ListBooksManualwantToRead from './ListBooksManualwantToRead'
import ListBooksManualRead from './ListBooksManualRead'

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
        books:[]
    }

  componentDidMount(){
    BooksAPI.getAll().then((books) => {
      //console.log(books)
      this.setState(() => ({books}))
    })
  }
//i am trying to display the available book shelf
  bookshelf = () => {
   this.state.books.map(book =>{
     console.log(book.shelf)
     return book.shelf
   })
  }

  render() {
    
    return (
 
      <div className="app">

          {/* <button onClick ={this.bookshelf}>CLICK ME</button> */}

          <Route exact path = '/search'  component ={SearchBooks} 
          // render ={() => ( 
          //  <div>
          //    Test
          //  </div>
          // )} 
          />
          {/* The components */}
          <Route exact path = '/' 
           render = {() => (
            <ListBooksManualCurrentlyReading books = {this.state.books}/>
          )}
          />

          <Route exact path = '/' 
          render = {() => (
            <ListBooksManualwantToRead books = {this.state.books}/>
          )}
        
          />
          <Route exact path = '/' 
          render = {() => (
            <ListBooksManualRead 
            books = {this.state.books}
            bookshelf = {this.bookshelf}
            />
          )}
        
          />
      </div>
    )
  }
}

export default BooksApp
