import React from 'react';
import { isXs } from '../../Utils/MediaQueries';

export const FeatureRight = ({ src, alt, title, longDescription }) => {
	return (
		<div
			style={
				isXs.matches
					? {
							display: 'flex',
							flexDirection: 'column',
							alignItems: 'center',
					  }
					: { display: 'flex', alignItems: 'center', margin: '3rem 0rem' }
			}
		>
			<div style={{ textAlign: 'right', marginRight: '2rem' }}>
				<h5>{title}</h5>
				<p>{longDescription}</p>
			</div>
			<img src={src} alt={alt} width={isXs.matches ? '40%' : '100%'} />
		</div>
	);
};
