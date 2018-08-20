import React from 'react';
import {Image,Button} from 'react-bootstrap';
import './Cards.css'

const Cards = (props) => {
	const {name,location,id} = props;
	return(

		<div className = 'tc bg-light-green dib br3 pa3 ma2 grow bw2 shadow-5'>
			<Image className="img" alt = 'orphan' src={`Images/Image${id}.jpg`}/>
			<div>
				<h2>{name}</h2>
				<p>{location}</p>
				<Button bsStyle="success">Explore More !!</Button>
			</div>
		</div>

		);
}
export default Cards;