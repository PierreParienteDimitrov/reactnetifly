import React from 'react';

export const HeroTitle = ({ header, title, colorTxt }) => {
	return (
		<div>
			<h5 style={{ paddingBottom: '1rem', color: colorTxt }}>{header}</h5>
			<h1 style={{ paddingBottom: '2rem', color: colorTxt }}>{title}</h1>
		</div>
	);
};
