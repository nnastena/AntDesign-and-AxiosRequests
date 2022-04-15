import React, { useState } from 'react';
import { Table, Space, Button } from 'antd';
import Form from './Form';


const BookList = ({ books,deleteBooks, updateBook }) => {
  const [openForm, setOpenForm] = useState({
      id: null,
      name: '',
      title: '',
      author: ''
  })

  const submitUpdate = (book) =>{
    updateBook(openForm.id, book)
    setOpenForm({
      id: null,
      name: '',
      title: '',
      author: ''
    })
  }
  
  if(openForm.id){
    return (
      <div>
        <h2>Update Book Information</h2>
        <Form  bookInf={openForm} bookFunc={submitUpdate} />
      </div>
    )
    
  }

  const columns = [
    {
      title: 'Id',
      dataIndex: 'id',
      key: 'BookId',
    },
    {
      title: 'Book Name',
      dataIndex: 'name',
      key: 'BookName'
    },
    {
      title: 'Book Title',
      dataIndex: 'title',
      key: 'BookTitle'
    },
    {
      title: 'Author',
      dataIndex: 'author',
      key: 'BookAuthor',
    },
    {
      title: 'Functions',
      key: 'BookFunctions',
      render: (render) => (
        <Space size="middle">
          <button onClick={() => setOpenForm( { id: render.id,name: render.name,title: render.title,author: render.author} ) }>Update</button>
          <button onClick={() => deleteBooks(render.id)}>Delete</button>
        </Space>
      ),
    },
  ];

  return (
    <div>
      <h3>BookList:</h3>
      <Table columns={columns} dataSource={books} />;
    </div>
  )
}

export default BookList