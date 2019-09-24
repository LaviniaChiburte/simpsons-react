//Button Component not used in the APP

import React from 'react';
import Button from '@material-ui/core/Button';
import './App.css';

export default function ButtonRouter(props) {
	return (
		<div className="container" style={displayContainer}>
			<Button
				style={displayButton}
				className="buton"
				color="secondary"
				variant="contained"
				size="large"
				text=""
			>
				{props.textButton}
			</Button>
		</div>
	);
}

const displayButton = {
	margin: '20px'
};

const displayContainer = {
	textAlign: 'center'
};
