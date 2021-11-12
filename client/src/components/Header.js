
// import './App.css';
import React from 'react'
import './header.css'

function Header(props) {
  return (
    <div className='header'>
      <img
        src='./yelpIcon.png'
        alt='yelp-icon'
        onClick={props.refreshPage}></img>
      <p className='header-text'>Yelp</p>
    </div>
  );
}

export default Header;