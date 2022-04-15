import React, { useState } from 'react'

function Form({ bookInf, bookFunc}) {
    const [input, setInput] = useState(bookInf.name)
    const [input2, setInput2] = useState(bookInf.title)
    const [input3, setInput3] = useState(bookInf.author)

    const handleChange = e=>{
        setInput(e.target.value)
    }
    const handleChange2 = e=>{
      setInput2(e.target.value)
    }
    const handleChange3 = e=>{
      setInput3(e.target.value)
    }

    const  handleSubmit = e =>{
        e.preventDefault();

        bookFunc({
            name:input,
            title: input2,
            author: input3
        });

        setInput('')
        setInput2('')
        setInput3('')
    }
    return (
        <div>
            <form className="book-form" onSubmit={handleSubmit}>
                <div className="row">
                    <div className="col-25">
                        <label>Enter Book Name</label>
                    </div>
                    <div className="col-75">
                        <input type="text" placeholder='Book Name' value={input} name='text' onChange={handleChange}/>
                    </div>
                </div>
                <div className="row">
                    <div className="col-25">
                        <label>Enter Book Title</label>
                    </div>
                    <div className="col-75">
                        <input type="text" placeholder='Book Title' value={input2} name='text2' onChange={handleChange2}/>
                    </div>
                </div>
                <div className="row">
                    <div className="col-25">
                        <label>Specify the author of the book</label>
                    </div>
                    <div className="col-75">
                        <textarea type="text" placeholder='Book Author' value={input3} name='text3' onChange={handleChange3}></textarea>
                    </div>
                </div>
                <br />
                <div className="row">
                    <button className='save-button'>Save</button>
                </div>
                
            </form>
        </div>
        
    )
}

export default Form