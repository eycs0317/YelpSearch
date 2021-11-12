import React, { useState} from 'react';
import './displayItem.css'
import StarRating from './StarRating'
import RestaurantDetail from './RestaurantDetail';

function DisplayItem(props) {

  return (

    <div className='displayItem' onClick={() => {
      props.handleDetailClick(props.data)
    }}>
      <div className='displayItem-content'>
        <img className='displayItem-image' src={props.data.image_url} alt="store_image" />
        <p className='displayItem-name'>{props.data.name}</p>
        <div className='displayItem-review-rating-content' >
          <StarRating rating={props.data.rating}/>
          <p className='displayItem-review'>{props.data.review_count} review</p>
        </div>
      </div>
    </div>
  )
}

export default DisplayItem;