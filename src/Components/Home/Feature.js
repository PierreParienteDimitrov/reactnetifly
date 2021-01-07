import React from 'react';

export const Feature = ({ img, alt }) => {
	return (
		<div
			style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}
		>
			<img src={img} alt={alt} width='150px' />
			<p>Description</p>
		</div>
	);
};
