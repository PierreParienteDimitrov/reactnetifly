import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import AllFeaturesImg from '../../images/all-features.png';
import { AllFeaturesTable } from '../../Utils/AllFeaturesTable';
import { FeatureTable } from './FeatureTable';

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
					<h2>ALL FEATURES</h2>
					<br />
					<h6>Each SKOOG Box Features</h6>
					<br />

					{AllFeaturesTable.map((el, index) => {
						return (
							<FeatureTable
								key={index}
								feature={el.feature}
								description={el.description}
							/>
						);
					})}
				</Col>
			</Row>
		</Container>
	);
};
