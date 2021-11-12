import React from 'react'
import './restaurantDetail.css'
import StarRating from './StarRating'
// import { Routes, Route, Link } from "react-router-dom";

function RestaurantDetail ({singleYelpData}) {
  return (
    <div className='restuarantDetail'>
      <p className='restaurantDetail-name'>{singleYelpData.name}</p>
        <div className='restuarantDetail-content'>
          <img className='restaurantDetail-image' src={singleYelpData.image_url} alt="resturant_photo" />

          <div className='restuarantDetail-info'>
            <p><span className='restuarantDetail-title'>Still Open :</span> {singleYelpData.is_closed ? 'Closed' : 'Open'}</p>
            <p><span className='restuarantDetail-title'>Address</span> : {singleYelpData.location.address1}, {singleYelpData.location.city}, {singleYelpData.location.zip_code}</p>
            <p><span className='restuarantDetail-title'>Phone# :</span> {singleYelpData.phone} {}</p>
            <p ><span className='restuarantDetail-title'>Rating: </span>
            <StarRating rating={singleYelpData.rating}/></p>
            <p><span className='restuarantDetail-title'>Reviews:</span> {singleYelpData.review_count}</p>
          </div>

        </div>
    </div>
  )

}

export default RestaurantDetail;