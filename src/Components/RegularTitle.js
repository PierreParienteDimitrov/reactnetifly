import React from 'react';

export const RegularTitle = ({ title, description, styling }) => {
	return (
		<div style={styling}>
			<h2>{title}</h2>
			<h4>{description}</h4>
		</div>
	);
};
