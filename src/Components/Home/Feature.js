import React from 'react';

export const Feature = ({ img, alt, title, description }) => {
	return (
		<div
			style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}
		>
			<img src={img} alt={alt} width='150px' />
			<br />
			<h3>{title}</h3>
			<p>{description}</p>
			<br />
			<br />
		</div>
	);
};
