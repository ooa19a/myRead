import React from 'react';
import { withRouter } from 'react-router-dom';
import * as BooksAPI from './BooksAPI';


class ListBooksManualCurrentlyReading extends React.Component {

handleChange = (e, book)  => {
   const shelf = e.target.value
   console.log(book,shelf)
   BooksAPI.update(book,shelf);
}


state = {
  options:[
    'currentlyReading',
    'wantToRead',
    'read'
  ],
    dead:[
      'readdddd',
      'diclined',
      'objectionMy lORD'
    ]
}

updatestate = (e) => {
  console.log(e.target.value)
  this.setState({
    options: [e.target.value]
    
  })
}

//funtion to update the state of the options[]. The goal is to make the page re-render
// updatestateofbook = (e) => {
//   console.log(e.target.value)
//   //const value = e.target.value;

//   if(this.props.onAddToBookShelf) {
//     this.props.onAddToBookShelf()
//     console.log(this.props.onAddToBookShelf())
//   }
//   this.setState((prevstate) => ({
//      options: [prevstate.options]
//   }))
// }



//combine the two above funtions. The goal is to pass this funtion to onChange 
combinefun = async (e,book) => {
  const shelf = e.target.value
  this.handleChange(e,book)
 // this.props.move(shelf,book)
  BooksAPI.update(book,shelf);
}







render(){   
     console.log('prop', this.props)

//desturturing 
    const {books, move, updateBookStatus} =this.props
    //const {options} = this.state
    //const {bookshelfDisplay} = this.props
    //const {bookshelf} = this.props
    //const {move} = this.props

    

    return(
      
        <div className="list-books">
          <div className="list-books-title">
            <h1>MyReads</h1>
          </div>

          <button onClick ={this.move}>See book shelf on Currently Reading page</button>

              <div className="bookshelf">
                  <h2 className="bookshelf-title">Currently Reading</h2>
                  <div className="bookshelf-books">
                    <ol className="books-grid">

                      {books.filter((book) => 
                      book.shelf === 'currentlyReading'
                      ).map((book)=> ( 
                          <li key ={book.id}>
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
                                    //onChange = {move(book)}
                                   //onChange = {(e)=> {this.handleChange(e,book); move(e.target.value)}}
                                    onChange = {(e)=> {
                                      this.combinefun(e, book)
                                      //BooksAPI.update(book,shelf)
                                    }
                                  }
                                    // onChange = {(e)=> {
                                    //   //this.redirectHome();
                                    //   //this.combinefun(e,book);
                                    //  this.handleChange(e, book); 
                                    //  //this.updatestateofbook(e);
                                    //     }}
                                        >

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

        </div>
    )
}
}
export default withRouter(ListBooksManualCurrentlyReading);