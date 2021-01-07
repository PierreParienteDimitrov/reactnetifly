import React from 'react';

export const FeatureRight = ({ src, alt, title, longDescription }) => {
	return (
		<div style={{ display: 'flex', alignItems: 'center' }}>
			<div style={{ textAlign: 'right' }}>
				<h5>{title}</h5>
				<p>{longDescription}</p>
			</div>
			<img src={src} alt={alt} />
		</div>
	);
};
