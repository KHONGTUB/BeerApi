
import React from 'react'
import Beer from './beer'


export function List (props){

         return <ul className="beers">
            {props.list.map(({name, image_url}) => (
            <Beer name={name} image={image_url }/>
          ))}
          </ul>

}

export default List