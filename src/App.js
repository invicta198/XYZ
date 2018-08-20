import React, {Component} from 'react';
import Front from './Components/Front';
import {BrowserRouter as Router, Route} from 'react-router-dom';
import Bar from './Components/Bar';

class App extends Component{
	
	render(){
		return(
			
				<Router>
				<div>
				<Bar />
				<Route exact path="/" component={Front} />
				</div>
				</Router>

			);
	}
	
}
	


export default App;