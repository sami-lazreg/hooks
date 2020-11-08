import React from 'react'

import MovieCard from './movieCard.js'



export default function MovieList(props) {
  let m = props.data.map(e=>{
    return <MovieCard da={e}/> 
  })
    return (
        <div style={{display:"flex",justifyContent:"space-around" , flexWrap:"wrap"}}>
          

          {m}
           
        </div>
    )
}
