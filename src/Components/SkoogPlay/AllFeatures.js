import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import AllFeaturesImg from '../../images/all-features.png';

export const AllFeatures = () => {
	return (
		<Container width='80%'>
			<Row>
				<Col sm={12} lg={6}>
					<div style={{ width: '100%' }}>
						<img src={AllFeaturesImg} alt='' width='100%' />
					</div>
				</Col>
				<Col sm={12} lg={6}>
					<h5>HOW IT WORKS</h5>
					<div style={{ display: 'flex', flexDirection: 'row' }}>
						<h5>2</h5>
						<p>Description</p>
					</div>
					<div style={{ display: 'flex', flexDirection: 'row' }}>
						<h5>3</h5>
						<p>Description</p>
					</div>
					<div style={{ display: 'flex', flexDirection: 'row' }}>
						<h5>1</h5>
						<p>Description</p>
					</div>
				</Col>
			</Row>
		</Container>
	);
};
