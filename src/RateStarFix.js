import StarRatingComponent from 'react-star-rating-component';
import React from 'react'
 
export default function RateStarFix (props) {
    
        
     
        return (                
          <div>
            
            <StarRatingComponent 
              name="rate2" 
              editing={false}
              renderStarIcon={() => <span className="fa fa-star"></span>}
              starCount={10}
              value={props.r}
            />
          </div>
        );
      }
