import React from 'react';
import './display.css'
import DisplayItem from './DisplayItem'

function Display({yelpData}) {
  return (
    <div className='display'>
      <div className='display-content'>

        {yelpData ? yelpData.map(item => {
          return <DisplayItem data={item} key={item.id}/>
        }) :  null }

      </div>
    </div>
  )
}

export default Display;