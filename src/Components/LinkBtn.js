import React from 'react';
import { Link } from 'react-router-dom';

export const LinkBtn = ({ href, text }) => {
	return (
		<div style={{ textAlign: 'center', margin: '1rem 0 6rem 0' }}>
			<Link to={href}>
				<h3>{text}</h3>
			</Link>
		</div>
	);
};
