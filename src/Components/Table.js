import React from 'react';

export const Table = ({ number, how }) => {
	return (
		<div
			style={{
				display: 'flex',
				flexDirection: 'row',
				alignItems: 'center',
				marginBottom: '2rem',
			}}
		>
			<h2 style={{ width: '10%' }}>{number}</h2>
			<h4>{how}</h4>
		</div>
	);
};
