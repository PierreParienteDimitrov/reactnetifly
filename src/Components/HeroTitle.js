import React from 'react';

export const HeroTitle = ({ header, title, colorTxt }) => {
	return (
		<div>
			<h5 style={{ paddingBottom: '2rem !important', color: colorTxt }}>
				{header}
			</h5>
			<div style={{ height: '0.5rem', width: '100%' }} />
			<h1 style={{ paddingBottom: '1rem', color: colorTxt }}>{title}</h1>
		</div>
	);
};
