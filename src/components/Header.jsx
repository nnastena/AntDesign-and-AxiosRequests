import React from 'react'
import { Link } from 'react-router-dom';
function Header() {
  return (
    <div className='header'>
        <Link to='/'>My library</Link>|
        <Link to='/new-book'>Add a new book</Link>
    </div>
  )
}

export default Header