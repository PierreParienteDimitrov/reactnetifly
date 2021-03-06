import React from 'react';
import { Container } from 'react-bootstrap';
import { primary } from '../../Utils/ColorPalette';
import { isXs } from '../../Utils/MediaQueries';

export const HomeDescription = () => {
	return (
		<Container
			style={
				isXs.matches
					? {
							width: '90%',
							marginTop: '4rem',
							marginBottom: '4rem',
							textAlign: 'center',
					  }
					: {
							width: '70%',
							padding: '8rem 0rem',
							textAlign: 'center',
					  }
			}
		>
			<Container style={{ marginBottom: '1rem' }}>
				<h3>EVER EXPANDING CONTENT SPARKS</h3>
				<br />
				<h2>NEW ADVENTURES</h2>
			</Container>

			<Container
				style={
					isXs.matches
						? {
								border: 'none',
								background: `${primary}`,
								color: 'white',
								borderRadius: '4rem',
								height: '2rem',
								display: 'flex',
								justifyContent: 'center',
								alignItems: 'center',
								width: '90%',
								marginBottom: '2rem',
						  }
						: {
								border: 'none',
								background: `${primary}`,
								color: 'white',
								borderRadius: '4rem',
								height: '2rem',
								display: 'flex',
								justifyContent: 'center',
								alignItems: 'center',
								width: '30%',
								marginBottom: '2rem',
						  }
				}
			>
				<h3>FUN & ENGAGING CONTENT</h3>
			</Container>

			<h4 style={isXs ? { textAlign: 'center' } : { marginBottom: '1rem' }}>
				Meet the Skoog: A Cube full of Curiosity. This soft and squeezable cube
				provides an endless amount of learning and entertainment! Ergonomically
				designed to fit perfectly into the hands of all children ages 3-9!
			</h4>
		</Container>
	);
};
