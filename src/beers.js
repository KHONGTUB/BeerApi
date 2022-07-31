

import Beer from './beer'


export function Beers (props) {



         return <ul className="beers">{props.beers.map(({name, image_url}) => (
            <Beer name={name} image={image_url }/>
          ))}</ul>

}

export default Beers