import React, {useState, useEffect} from 'react'
import './starRating.css'
function StarRating(props) {
  const [stars, setStars] = useState(0)
  const [decimal, setDecimal] = useState(false)

  useEffect( () => {
    checkStarRating(props.rating)
  }, [])
  const checkStarRating = (rating) => {
    if(rating % 1 !== 0) {
      setDecimal(true)
      setStars(rating - 0.5)
    } else {
      setStars(rating)
    }
  }

  return (
    <div className="star-rating">

    {[...Array(stars)].map((star) => {
      return (
        <i class="fas fa-star"></i>
      );
    })}
    { decimal ? <i class="fas fa-star-half"></i> : null}

  </div>
  )
}

export default StarRating;