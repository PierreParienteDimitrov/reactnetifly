import React from 'react';
import { yellow } from '../Utils/ColorPalette';

export const HeroTitle = ({ header, title }) => {
	return (
		<div>
			<h5 style={{ paddingBottom: '1rem', color: `${yellow}` }}>{header}</h5>
			<h1 style={{ paddingBottom: '2rem', color: `${yellow}` }}>{title}</h1>
		</div>
	);
};
