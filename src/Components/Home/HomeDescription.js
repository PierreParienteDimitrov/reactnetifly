import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { primary } from '../../Utils/ColorPalette';
import { isXs } from '../../Utils/MediaQueries';

export const HomeDescription = () => {
	return (
		<Container
			style={
				isXs.matches
					? { width: '90%', marginTop: '4rem', marginBottom: '4rem' }
					: {
							width: '70%',
							marginTop: '8rem',
							marginBottom: '10rem',
					  }
			}
		>
			<div
				style={
					isXs
						? {
								textAlign: 'center',
								marginBottom: '1rem',
						  }
						: {
								marginBottom: '1rem',
						  }
				}
			>
				<h3>EVER EXPANDING CONTENT SPARKS</h3>
				<br />
				<h2>NEW ADVENTURES</h2>
				<div
					style={{
						border: 'none',
						background: `${primary}`,
						color: 'white',
						borderRadius: '4rem',
						height: '2rem',
						display: 'flex',
						justifyContent: 'center',
						alignItems: 'center',
					}}
				>
					<h3>FUN & ENGAGING CONTENT</h3>
				</div>
			</div>

			<h4 style={isXs ? { textAlign: 'center' } : { marginBottom: '1rem' }}>
				Meet the Skoog. Describe in a few words the what and the who. What is the
				Skoog? For who it is?
			</h4>
		</Container>
	);
};
