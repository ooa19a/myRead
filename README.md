# Project Overview

<<<<<<< HEAD
I completed this project without using Redux.  
=======
I completed this project without using Redux.
>>>>>>> e116984596a3bafe3912842683a75eb1927a3493

```js
In the MyReads project, I created a bookshelf app that allows user to select and categorize books you have read, 
are currently reading, or want to read. 
The project emphasizes using React to build the application and provides an API server and client library that I used to 
persist information as I interact with the application.
```

## Short Video Demostration of the Application

[![homepage](https://media.giphy.com/media/PRk9ZsoXBjPCEcdy3n/giphy.gif)](asset/video_demostration.mp4)
_Click on the gif to see the full (1 minute) video_

| **Screenshots**  | **Screenshots Contd**|
|------------|------------|
| [![Homepage](asset/homepage.png)](asset/homepage.png) _**Homepage**_ | [![Homepage](asset/homepage2.png)](asset/homepage2.png) _**Homepage**_ |
-------------------------------------------------------------------------------------------------
| [![movingAbook](asset/movingAbook.png)](asset/movingAbook.png) _**Moving a book from a category**_ | [![movedAbook](asset/movedAbook.png)](asset/movedAbook.png) _**Successfully Moved the book**_ |
| [![searchBooks](asset/searchBooks.png)](asset/searchBooks.png) _**Search for a book**_ | [![movingFromSearch](asset/movingFromSearch.png)](asset/movingFromSearch.png) _**Moving a book from the search to a category**_ |
| [![searchbookmoved](asset/searchbookmoved.png)](asset/searchbookmoved.png) _**Book successfully moed to a category**_ | [![homepage](asset/homepage.png)](asset/homepage.png) _**Displaying homepage**_|

### To get started developing right away:

* I installed all project dependencies with `npm install`
* I started the development server with `npm start`

## What is included in the project file
```bash
├── CONTRIBUTING.md
├── README.md - This file.
├── SEARCH_TERMS.md # The whitelisted short collection of available search terms for you to use with your app.
├── package.json # npm package manager file. It's unlikely that you'll need to modify this.
├── public
│   ├── favicon.ico # React Icon, You may change if you wish.
│   └── index.html # DO NOT MODIFY
└── src
    ├── App.css # Styles for your app. Feel free to customize this as you desire.
    ├── App.js # This is the root of your app. Contains static HTML right now.
    ├── App.test.js # Used for testing. Provided with Create React App. Testing is encouraged, but not required.
    ├── BooksAPI.js # A JavaScript API for the provided Udacity backend. Instructions for the methods are below.
    ├── icons # Helpful images for your app. Use at your discretion.
    │   ├── add.svg
    │   ├── arrow-back.svg
    │   └── arrow-drop-down.svg
    ├── index.css # Global styles. You probably won't need to change anything here.
    └── index.js # You should not need to modify this file. It is used for DOM rendering only.
```

Remember that good React design practice is to create new JS files for each component and use import/require statements to include them where they are needed.

## Backend Server

To simplify the development process, a backend server was provided for me for you to develop against. The provided file [`BooksAPI.js`](src/BooksAPI.js) contains the methods I needed to perform necessary operations on the backend:

* [`getAll`](#getall)
* [`update`](#update)
* [`search`](#search)

### `getAll`

Method Signature:

```js
getAll()
```

* Returns a Promise which resolves to a JSON object containing a collection of book objects.
* This collection represents the books currently in the bookshelves in your app.

### `update`

Method Signature:

```js
update(book, shelf)
```

* book: `<Object>` containing at minimum an `id` attribute
* shelf: `<String>` contains one of ["wantToRead", "currentlyReading", "read"]  
* Returns a Promise which resolves to a JSON object containing the response data of the POST request

### `search`

Method Signature:

```js
search(query)
```

* query: `<String>`
* Returns a Promise which resolves to a JSON object containing a collection of a maximum of 20 book objects.
* These books do not know which shelf they are on. They are raw results only. You'll need to make sure that books have the correct state while on the search page.

## Important
The backend API uses a fixed set of cached search results and is limited to a particular set of search terms, which can be found in [SEARCH_TERMS.md](SEARCH_TERMS.md). That list of terms are the _only_ terms that will work with the backend, so don't be surprised if your searches for Basket Weaving or Bubble Wrap don't come back with any results.

## Create React App

This project was bootstrapped with [Create React App](https://github.com/facebookincubator/create-react-app). You can find more information on how to perform common tasks [here](https://github.com/facebookincubator/create-react-app/blob/master/packages/react-scripts/template/README.md).
