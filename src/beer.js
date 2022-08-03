import React, { useState } from 'react'

export function Beer(props) {

    const [isLiked, setisLiked] = useState(false)
    

    const handleLike = () => {
      let status = isLiked === true? false : true
      setisLiked(status)
    }


    




    return (
      <li>
        <h3>{props.name}</h3>
        <img className='image' src={props.image} alt={props.name} /> <br></br>
        <button id={isLiked ? "Liked" : "Like"} onClick={handleLike}>{isLiked ? "💖" : "Like"}</button>
      </li>
    );
  
}

export default Beer
