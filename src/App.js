import React, { Component } from 'react';
import './App.css';

import Quote from './Quote';
import Avatar from './Avatar';

class App extends Component {
	render() {
		return (
			<div className="App">
				<div style={displaySection}>
					<Avatar
						image="https://www.stickees.com/files/cartoon/the-simpsons/2239-bart-simpson-.png"
						firstName="Bart"
						lastName="Simpson"
					/>

					<Avatar
						image="https://www.stickees.com/files/cartoon/the-simpsons/2250-lisa-simpson-sticker.png"
						firstName="Lisa"
						lastName="Simpson"
					/>

					<Avatar
						image="https://www.stickees.com/files/cartoon/the-simpsons/2252-marge-simpson-sticker.png"
						firstName="Marge"
						lastName="Simpson"
					/>
				</div>

				<header className="App-header">
					<h1 className="App-title">Simpsons Quotes</h1>
				</header>

				<Quote
					quote="I believe the children are the future... Unless we stop them now!"
					character="Homer Simpson"
					image="https://cdn.glitch.com/3c3ffadc-3406-4440-bb95-d40ec8fcde72%2FHomerSimpson.png?1497567511939"
				/>
				<Quote
					quote="Me fail English? That's unpossible"
					character="Ralph Wiggum"
					image="https://cdn.glitch.com/3c3ffadc-3406-4440-bb95-d40ec8fcde72%2FRalphWiggum.png?1497567511523"
				/>
			</div>
		);
	}
}

const displaySection = {
	display: 'flex'
};

export default App;
