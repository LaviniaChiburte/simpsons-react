import React, { Component } from 'react';
import './App.css';
import logo from './logo.svg';

import Quote from './Quote';
import Avatar from './Avatar';
import Quotes from './Quotes';
import Lamp from './Lamp.js';
import Button from '@material-ui/core/Button';

class App extends Component {
	constructor(props) {
		super(props);
		this.state = {
			working: this.props.working
		};
	}
	handleClick = () => {
		this.setState({ working: !this.state.working });
	};

	render() {
		const workingOrNot = this.state.working ? 'App-logo-my-spin' : 'App-logo';
		const textButton = this.state.working ? 'Working' : 'Break';

		return (
			<div className="App">
				<img src={logo} className={workingOrNot} alt="logo" />
				<Button
					onClick={this.handleClick}
					className="buton"
					color="secondary"
					variant="contained"
					size="large"
				>
					{textButton}
				</Button>
				<Quote
					quote="I believe the children are the future... Unless we stop them now!"
					character="Homer Simpson"
					image="https://cdn.glitch.com/3c3ffadc-3406-4440-bb95-d40ec8fcde72%2FHomerSimpson.png?1497567511939"
				/>

				<Lamp />
				<Lamp />
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
					quote="Me fail English? That's unpossible"
					character="Ralph Wiggum"
					image="https://cdn.glitch.com/3c3ffadc-3406-4440-bb95-d40ec8fcde72%2FRalphWiggum.png?1497567511523"
				/>

				<Quotes />
			</div>
		);
	}
}

const displaySection = {
	display: 'flex'
};

export default App;
