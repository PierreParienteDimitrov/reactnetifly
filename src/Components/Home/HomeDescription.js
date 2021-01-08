import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { Feature } from './Feature';
import { FeatureIcons } from '../../Utils/FeatureIcons';
import { primary } from '../../Utils/ColorPalette';
import { LinkBtn } from '../LinkBtn';

export const HomeDescription = () => {
	return (
		<>
			<Container>
				<div
					style={{
						display: 'flex',
						alignContent: 'center',
						flexDirection: 'column',
						alignItems: 'center',
						textAlign: 'center',
						marginTop: '10rem',
						justifyContent: 'center',
						margin: '20% 20% 10% 20%',
					}}
				>
					<div style={{ marginBottom: '1rem' }}>
						<h3>EVER EXPANDING CONTENT SPARKS</h3>
						<br />
						<h2>NEW ADVENTURES</h2>
					</div>

					<div
						style={{
							border: 'none',
							background: `${primary}`,
							color: 'white',
							borderRadius: '4rem',
							width: '300px',
							height: '2rem',
							display: 'flex',
							justifyContent: 'center',
							alignItems: 'center',
							marginBottom: '2rem',
						}}
					>
						<h3>FUN & ENGAGING CONTENT</h3>
					</div>
					<h4>
						Meet the Skoog. Describe in a few words the what and the who. What is the
						Skoog? For who it is?
					</h4>
				</div>
			</Container>
			<Container>
				<Row style={{ textAlign: 'center', margin: '0 10%' }}>
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
		</>
	);
};
