import React from 'react';
import { Link } from 'react-router-dom';

export const LinkBtn = ({ href, text, align }) => {
	return (
		<div style={{ textAlign: align, margin: '1rem 0' }}>
			<Link to={href}>
				<h3>{text}</h3>
			</Link>
		</div>
	);
};
