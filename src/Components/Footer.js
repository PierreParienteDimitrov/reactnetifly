import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { primary } from '../Utils/ColorPalette';
import { Link } from 'react-router-dom';
// import { isXs } from '../Utils/MediaQueries';

export const Footer = () => {
	return (
		<Container
			fluid
			style={{ backgroundColor: `${primary}`, justifyContent: 'center' }}
		>
			<Container style={{ width: '70%', padding: '4rem 0rem' }}>
				<Row style={{ color: 'white' }}>
					<Col
						sm={12}
						lg={4}
						style={{
							marginBottom: '2rem',
							display: 'flex',
							flexDirection: 'column',
							alignItems: 'flex-start',
						}}
					>
						<h6>About Us</h6>
						<Link to='/story' style={{ color: 'white' }}>
							<p>About Us</p>
						</Link>
					</Col>
					<Col
						sm={12}
						lg={4}
						style={{
							marginBottom: '2rem',
							display: 'flex',
							flexDirection: 'column',
							alignItems: 'flex-start',
						}}
					>
						<h6>Info</h6>
						<Link to='/story' style={{ color: 'white' }}>
							<p>Contact Us</p>
						</Link>
					</Col>
					<Col
						sm={12}
						lg={4}
						style={{
							marginBottom: '2rem',
							display: 'flex',
							flexDirection: 'column',
							alignItems: 'flex-start',
						}}
					>
						<h6>Discover</h6>
						<Link to='/skoog-play' style={{ color: 'white' }}>
							<p>Skoog Play</p>
						</Link>
						<Link to='/wonder-dots' style={{ color: 'white' }}>
							<p>Wonder Dots</p>
						</Link>
					</Col>
				</Row>
			</Container>
		</Container>
	);
};
