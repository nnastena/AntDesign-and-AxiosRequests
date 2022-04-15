import './App.css';
import axios from 'axios';
import React, { useState } from 'react';
import Header from './components/Header'
import BookList from './components/BookList';
import { updateBook, deleteBooks} from './functions'


function App() {

  const url = 'http://localhost:4000/books';
  const [books, setBooks] = useState([]);

  const getBooks = async () => {
    try {
      return await axios.get(url).then(res=> {
        setBooks(res.data)
        return res.data
      })
    } 
    catch (error) {
      console.error(error)
    }
  }

  getBooks()
  return (
    <div className="library container">
      <Header/>
      <BookList books={books} deleteBooks={deleteBooks}  updateBook={updateBook} />
    </div>
  );
}

export default App;
