import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import AllFeaturesImg from '../../images/all-features.png';
import { AllFeaturesTable } from '../../Utils/AllFeaturesTable';
import { WonderDotsFeatureTable } from '../../Utils/WonderDotsFeatureTable';

import { FeatureTable } from './FeatureTable';
import { isXs } from '../../Utils/MediaQueries';
import { RegularTitle } from '../RegularTitle';

export const AllFeatures = () => {
	return (
		<Container
			style={
				isXs.matches
					? { width: '90%', padding: '4rem 0' }
					: { width: '100%', padding: '6rem 0' }
			}
		>
			<Row>
				<Col sm={12} lg={6}>
					<Container
						style={
							isXs.matches ? { width: '70%', marginBottom: '4rem' } : { width: '80%' }
						}
					>
						<img src={AllFeaturesImg} alt='' width='100%' />
					</Container>
				</Col>
				<Col sm={12} lg={6}>
					<RegularTitle
						title={'all features'}
						description={'Each SKOOG Box Features'}
						styling={{ marginBottom: '2rem' }}
					/>

					{AllFeaturesTable.map((el, index) => {
						return (
							<FeatureTable
								key={index}
								feature={el.feature}
								description={el.description}
							/>
						);
					})}

					<RegularTitle
						description={'Each Wonder Dots Comes With'}
						styling={{ marginBottom: '2rem' }}
					/>
					{WonderDotsFeatureTable.map((el, index) => {
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
