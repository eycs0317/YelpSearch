import React, { useState } from 'react'
import './searchBar.css'

function SearchBar() {
  const [searchItem, setSearchItem] = useState('')

  const handleChange = (event) => {
    setSearchItem(event.target.value)
  }
  const handleClick = (event) => {

    console.log(searchItem)
    console.log('clicked')
    event.preventDefault();
  }
  return (
    <div className='search-bar'>
      <form>
      <input
        type='text'
        placeholder='&#xF002; '
        className='search-input fa'
        name='search'
        onChange={handleChange}
        value={searchItem}
      />
      <button
        className='search-button'
        type='submit'
        onClick={handleClick}
        >
        Search</button>
      </form>
    </div>
  )
}

export default SearchBar;