import React from 'react';

export const FeatureCenter = ({ src, alt, title, longDescription }) => {
	return (
		<div
			style={{ display: 'flex', alignItems: 'center', flexDirection: 'column' }}
		>
			<img src={src} alt={alt} width='50%' />
			<br />
			<div
				style={{
					color: 'white',
					textAlign: 'center',
					marginBottom: '4rem',
				}}
			>
				<h5>{title}</h5>
				<p>{longDescription}</p>
			</div>
		</div>
	);
};
