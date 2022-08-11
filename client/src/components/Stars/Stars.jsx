import React from 'react'
import './stars.css'

const Stars = () => {
  return (
    <div className='cont_stars'>
        <div class="rating-area">
            <input type="radio" id="star-5" name="rating" value="5" />
            <label for="star-5" title="Lead"></label>

            <input type="radio" id="star-4" name="rating" value="4" />
            <label for="star-4" title="Senior"></label>

            <input type="radio" id="star-3" name="rating" value="3" />
            <label for="star-3" title="Middle"></label>  
            
            <input type="radio" id="star-2" name="rating" value="2" />
            <label for="star-2" title="Junior"></label>   

            <input type="radio" id="star-1" name="rating" value="1" />
            <label for="star-1" title="Trainee"></label>
        </div>  
    </div>
  )
}

export default Stars