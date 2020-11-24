// import React, { Component } from 'react';
// import CatComponent from './CatComponent.js'
// import {GraceHopperQuoteComponent} from './GraceHopperQuoteComponent.js'
// import MouseComponent from './MouseComponent.js'

// class App extends Component {
// 	render() {
// 		// your code in the return statement below!
// 		return (
// 			<div className="App">
// 				<CatComponent />
// 				<GraceHopperQuoteComponent />
// 				<MouseComponent />
// 			</div>
// 		);
// 	}
// }

// export default App;

import React, {Component} from 'react';
import CatComponent from './CatComponent.js'
import {GraceHopperComponent} from './GraceHopperQuoteComponent.js'
import MouseComponent from './MouseComponent.js'

class App extends React.Component{
	render(){
		return(
			<div className="App">
				<CatComponent />
				<MouseComponent />
				<GraceHopperComponent />
			</div>
		)
	}
}

export default App;