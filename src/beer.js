import React from 'react'

export function Beer(props) {



    console.log(props)
    return (
      <li>
        <h3>{props.name}</h3>
        <img className='image' src={props.image} alt={props.name} />
      </li>
    );
  
}

export default Beer
