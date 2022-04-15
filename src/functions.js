import axios from 'axios';
import React, { useState } from 'react';

const url = 'http://localhost:4000/books';

  const deleteBooks = async(delId)=>{
      await axios.delete(url + "/"+ delId)
      .then(res => {
        console.log(res);
        console.log(res.data);
      })
  }

  const postBook = async (newBook) => {
    try {
      return await axios.post(url, newBook)
    } 
    catch (error) {
      console.error(error)
    }
  }

  const updateBook = async (bookId, updateBook) => {
    try {
      return await axios.put(url + '/'+bookId, updateBook)
    } 
    catch (error) {
      console.error(error)
    }
  }

  export {updateBook, postBook, deleteBooks}; 