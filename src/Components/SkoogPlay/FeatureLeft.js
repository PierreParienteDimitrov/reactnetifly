import React from 'react';

export const FeatureLeft = ({ src, alt, title, longDescription }) => {
	return (
		<div
			style={{
				display: 'flex',
				alignItems: 'center',
				marginBottom: '2rem',
				justifyContent: 'flex-start',
			}}
		>
			<img src={src} alt={alt} />
			<div style={{ textAlign: 'left', marginLeft: '2rem', color: 'white' }}>
				<h5>{title}</h5>
				<p>{longDescription}</p>
			</div>
		</div>
	);
};
