import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { Feature } from './Feature';
import { Icons } from '../../Utils/ImgArr';

export const HomeDescription = () => {
	return (
		<>
			<Container>
				<div style={{ textAlign: 'center', marginTop: '10rem' }}>
					<h3>EVER EXPANDING CONTENT SPARKS</h3>
					<h1>NEW ADVENTURES</h1>
					<button
						style={{
							border: 'none',
							background: 'red',
							padding: '0 1rem',
							color: 'white',
							borderRadius: '4rem',
						}}
					>
						FUN & ENGAGING CONTENT
					</button>
					<p>
						Meet the Skoog. Describe in a few words the what and the who. What is the
						Skoog? For who it is?
					</p>
				</div>
			</Container>
			<Container>
				<Row style={{ textAlign: 'center' }}>
					{Icons.map((image, index) => {
						return (
							<Col sm={12} lg={4}>
								<Feature img={image.src} key={index} alt={image.alt} />
							</Col>
						);
					})}
				</Row>
				<div style={{ textAlign: 'center', marginTop: '3rem' }}>
					<h5>BROWSE ALL FEATURES</h5>
				</div>
			</Container>
		</>
	);
};
