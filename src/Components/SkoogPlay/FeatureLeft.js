import React from 'react';
import { isXs } from '../../Utils/MediaQueries';

export const FeatureLeft = ({ src, alt, title, longDescription }) => {
	return (
		<div style={{ display: 'flex', alignItems: 'center' }}>
			<img src={src} alt={alt} width={isXs.matches ? '40%' : '100%'} />
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
				<h5>{title}</h5>
				<p>{longDescription}</p>
			</div>
		</div>
	);
};
