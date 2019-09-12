import React from 'react';

const Avatar = ({ image, firstName, lastName, children }) => (
	<div class="container" style={displayContainer}>
		<div class="row">
			<div class="col s12">
				<img src={image} alt="" class="materialboxed responsive-img" />
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
