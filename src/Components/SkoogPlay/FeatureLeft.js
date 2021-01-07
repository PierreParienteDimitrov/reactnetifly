import React from 'react';

export const FeatureLeft = ({ src, alt, title, longDescription }) => {
	return (
		<div style={{ display: 'flex', alignItems: 'center' }}>
			<img src={src} alt={alt} />
			<div>
				<h5>{title}</h5>
				<p>{longDescription}</p>
			</div>
		</div>
	);
};
