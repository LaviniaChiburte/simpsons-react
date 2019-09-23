import React from 'react';

const Avatar = ({ image, firstName, lastName, children }) => (
	<div className="container" style={displayContainer}>
		<div className="row">
			<div className="col s12">
				<img src={image} alt="" className="materialboxed responsive-img" />
				<h4 className="white-text">{firstName}</h4>
				<h4 className="pink-text" style={upperCase}>
					{lastName}
				</h4>
			</div>
		</div>
	</div>
);

const upperCase = {
	textTransform: 'uppercase'
};

const displayContainer = {
	display: 'flex'
};

export default Avatar;
