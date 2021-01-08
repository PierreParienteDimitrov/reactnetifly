import React from 'react';
import { blue, primary } from '../Utils/ColorPalette';

export const Button = ({ cta }) => {
	const styles = {
		btn: {
			border: 'none',
			background: `${primary}`,
			padding: '0.2rem 1.2rem',
			borderRadius: '10px',
			boxShadow: `0px 5px ${blue}`,
			color: `${blue}`,
			cursor: 'pointer',
		},
	};

	return (
		<button style={styles.btn}>
			<a
				href='https://www.google.com/'
				style={{ color: 'white', textDecoration: 'none' }}
			>
				{cta}
			</a>
		</button>
	);
};
