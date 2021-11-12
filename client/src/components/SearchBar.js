import React, { useState, useEffect } from 'react'
import './searchBar.css'
import {apiSearch} from'../utils/API.js'
import Display from './Display';
import RestaurantDetail from './RestaurantDetail'
import DisplayItem from './DisplayItem'
// import { Routes, Route, Link } from "react-router-dom";
// console.log('apisearch', apiSearch())
// console.log('key',process.env.REACT_APP_AUTHORIZATION_KEY)
function SearchBar() {
  const [searchItem, setSearchItem] = useState('')
  const [searchLocation, setSearchLocation] = useState('')
  const [yelpData, setYelpData] = useState('')
  const [itemClick, setItemClick] = useState(false)
  const [singleYelpData, setSingleYelpData] = useState()

  const handleChange = (event) => {
    console.log('eve', event.target.name)
    if(event.target.name === 'searchItem') {
      setSearchItem(event.target.value)
    } else {
      setSearchLocation(event.target.value)
    }

  }
  const handleClick = async (event) => {
    console.log('clicked')
    event.preventDefault();
    try {
      const response = await apiSearch(searchItem, searchLocation)
      // console.log(response)
      const data = await response.json()
      console.log('data', data)
      setYelpData(data.businesses)
    }
    catch (err){
      console.error(err)
    }
  }
  const handleDetailClick = (itemDetail) => {
    console.log('handle detail got click', itemDetail)
    setItemClick(true)
    setSingleYelpData(itemDetail)
  }
  // useEffect(() => {
  //   handleLocation()
  // })
  // const handleLocation = () => {
  //   if(navigator.geolocation) {
  //     console.log('checking')
  //     navigator.geolocation.getCurrentPosition((pos) => {
  //       console.log('pos', pos)
  //     }, (err) => {
  //       console.log('err', err)
  //     })
  //   }
  // }

  return (
    <>
    <div className='search-bar'>
      <form className='search-form'>
      <input
        type='text'
        placeholder='&#xF002; tacos, cheap dinner '
        className='search-input search-input1 fa  '
        name='searchItem'
        onChange={handleChange}
        value={searchItem}
      />
      <span></span>
      <input
        type='text'
        placeholder='San Jose, CA'
        className='search-input search-input2 fa'
        name='searchLocation'
        onChange={handleChange}
        value={searchLocation}
      />
      <button
        className='search-button'
        type='submit'
        onClick={handleClick}
        >
        Search</button>
      </form>
    </div>
    {itemClick ? <RestaurantDetail singleYelpData={singleYelpData} /> :
      <div className='display'>
        <div className='display-content'>
          {yelpData ? yelpData.map(item => {
            return <DisplayItem data={item} key={item.id} handleDetailClick={handleDetailClick}/>
          }): null
    }
        </div>
      </div>
    }
    {/* <Display yelpData={yelpData} handleDetailClick={handleDetailClick}/> */}
    {/* <Routes>
        <Route path="/display" element={<Display yelpData={yelpData}/>} />
        <Route path="/RestaurantDetail" element={<RestaurantDetail />} />
    </Routes> */}
    </>

  )
}

export default SearchBar;