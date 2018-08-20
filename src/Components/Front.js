import React, {Component} from 'react';
import CardList from './CardList';
import Scroll from './Scroll';
import {robots} from './robots';
import {Grid,Row,Col,Button,Image} from 'react-bootstrap';
import Cor from './Cor'
import './Front.css'

class Front extends Component{
	
	render(){
		return(
			<div className='tc'>
				<Cor />
				<Grid>
					<Row className="bg-light-yellow br3 pa3 ma2">
						<Col xs={12} sm={6} >
							<Image className="images" src="Images/stand.jpg" circle/>
							<h1>What We Stand For </h1>
							<p>I really recommend you use odorless thinner or your spouse is gonna run you right out into the yard and you'll be working by yourself. Learn when to stop. Let's go up in here, and start having some fun You can do it. Be so very light. Be a gentle whisper. Let's put some happy little clouds in our world.
							   .You can spend all day playing with mountains. Absolutely no pressure. You are just a whisper floating across a mountain. See. We take the corner of the brush and let it play back-and-forth. Now let's put some happy little clouds in here. You have to allow the paint to break to make it beautiful. Just beat the devil out of it.</p>
							<Button className="btn" bsStyle="primary">Explore More</Button>
						</Col>
						<Col xs={12} sm={6} >
							<Image className="images" src="Images/we.jpg" circle/>
							<h1>What We Do!! </h1>
							<p>I really recommend you use odorless thinner or your spouse is gonna run you right out into the yard and you'll be working by yourself. Learn when to stop. Let's go up in here, and start having some fun You can do it. Be so very light. Be a gentle whisper. Let's put some happy little clouds in our world.
							   .You can spend all day playing with mountains. Absolutely no pressure. You are just a whisper floating across a mountain. See. We take the corner of the brush and let it play back-and-forth. Now let's put some happy little clouds in here. You have to allow the paint to break to make it beautiful. Just beat the devil out of it.</p>
							<Button className="btn" bsStyle="primary">Explore More</Button>
						</Col>
					</Row>
				</Grid>

				<Grid>
					<Row>
						<Col xs={12} sm={10} >
						<h1>Orphanages Connected</h1>
						<Scroll>
							<CardList robots = {robots} />
						</Scroll>
						</Col>
						<Col xs={12} sm={2} >
							<Row>
								<Button className="btn" bsStyle="primary">Sign Up</Button>
							</Row>
							<Row>
								<Button className="btn" bsStyle="primary">Log In</Button>
							</Row>
							<Row className="bg-light-blue br3 pa2 ma4" id="row">
								<h3>From Our's heart to yours</h3>
								<p>Painting should do one thing. It should put happiness in your heart. Trees get lonely too, so we'll give him a little friend. And I know you're saying, 'Oh Bob, you've done it this time.' And you may be right. Everything's not great in life, but we can still find beauty in it.

								   These little son of a guns hide in your brush and you just have to push them out. Very easy to work these to death. We're not trying to teach you a thing to copy. We're just here to teach you a technique, then let you loose into the world.</p>
							</Row>

						</Col>
					</Row>
				</Grid>
				
				</div>
	);
	}
	
}
	


export default Front;