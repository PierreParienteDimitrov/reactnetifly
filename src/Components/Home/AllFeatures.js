import React from 'react';
import { LinkBtn } from '../LinkBtn';
import { Container, Row, Col } from 'react-bootstrap';
import { Feature } from './Feature';
import { FeatureIcons } from '../../Utils/FeatureIcons';
import { isXs } from '../../Utils/MediaQueries';

export const AllFeatures = () => {
	return (
		<Container
			style={
				isXs.matches
					? { width: '90%', paddingBottom: '4rem' }
					: { width: '70%', paddingBottom: '8rem' }
			}
		>
			<Row style={{ textAlign: 'center' }}>
				{FeatureIcons.map((feature, index) => {
					return (
						<Col sm={12} lg={4} key={index}>
							<Feature
								img={feature.src}
								alt={feature.alt}
								title={feature.title}
								description={feature.shortDescription}
							/>
						</Col>
					);
				})}
			</Row>
			<LinkBtn
				align={'center'}
				href={'/skoog-play'}
				text={'Browse All Features'}
			/>
		</Container>
	);
};
