import React from 'react';

export const FeatureTable = ({ feature, description }) => {
	return (
		<>
			<div
				style={{ display: 'flex', width: '100%', justifyContent: 'space-between' }}
			>
				<h3>{feature}</h3>
				<p>{description}</p>
			</div>
			<hr />
		</>
	);
};
