import React from 'react';

export const LinkBtn = ({ href, text }) => {
	return (
		<div style={{ textAlign: 'center', margin: '1rem 0 6rem 0' }}>
			<a href={href}>
				<h3>{text}</h3>
			</a>
		</div>
	);
};
