import React from 'react';
import { isXs } from '../Utils/MediaQueries';

export const Table = ({ number, how }) => {
	return (
		<div
			style={
				isXs.matches
					? {
							display: 'flex',
							flexDirection: 'column',
							alignItems: 'center',
							marginBottom: '1.7rem',
							width: '100%',
							textAlign: 'center',
					  }
					: {
							display: 'flex',
							flexDirection: 'row',
							alignItems: 'center',
							marginBottom: '1.7rem',
							width: '80%',
					  }
			}
		>
			<h2 style={{ width: '10%' }}>{number}</h2>
			<h4>{how}</h4>
		</div>
	);
};
