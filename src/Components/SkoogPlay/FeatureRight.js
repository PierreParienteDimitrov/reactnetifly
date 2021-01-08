import React from 'react';

export const FeatureRight = ({ src, alt, title, longDescription }) => {
	return (
		<div style={{ display: 'flex', alignItems: 'center', marginBottom: '2rem' }}>
			<div style={{ textAlign: 'right', marginRight: '2rem', color: 'white' }}>
				<h5>{title}</h5>
				<p>{longDescription}</p>
			</div>
			<img src={src} alt={alt} />
		</div>
	);
};
