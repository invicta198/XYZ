import React, {Component} from 'react';
import {Carousel} from 'react-bootstrap';
import './Cor.css'

class Cor extends Component{
	
	render(){
		return(
		<div>
			<Carousel>
			  <Carousel.Item className="body">
			    <img className="img1" alt="autoxauto" src="Images/Cor1.jpg" />
			    <Carousel.Caption className="corimg">
			      <h3>Online Xyz</h3>
			    </Carousel.Caption>
			  </Carousel.Item>
			  <Carousel.Item className="body">
			    <img className="img1" alt="autoxauto" src="Images/Cor2.jpg" />
			    <Carousel.Caption className="corimg">
			      <h3>What we stand for !!!</h3>
			    </Carousel.Caption>
			  </Carousel.Item>
			  <Carousel.Item className="body">
			    <img className="img1" alt="autoxauto" src="Images/Cor3.jpg" />
			    <Carousel.Caption className="corimg">
			      <h3>What we do!!</h3>
			    </Carousel.Caption>
			  </Carousel.Item>
			</Carousel>
		</div>
	);
	}
	
}
export default Cor;