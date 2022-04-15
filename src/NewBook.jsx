import React from 'react'
import Header from './components/Header'
import Form from './components/Form';
import {postBook} from './functions'

function NewBook() {
  return (
    <div className='container'>
        <Header/>
        <h2>Add a description to a new book</h2>
        <Form bookInf={{id: null,name: '',title: '',author: ''}} bookFunc={postBook} />
    </div>
  )
}

export default NewBook