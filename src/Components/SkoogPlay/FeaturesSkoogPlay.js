import React from 'react';
import { Container } from 'react-bootstrap';
import SkoogPlayFeaturesBg from '../../images/SkoogPlay-featuresBg.png';
import { RegularTitle } from '../RegularTitle';
import { blue } from '../../Utils/ColorPalette';
import { FeatureIcons } from '../../Utils/FeatureIcons';
import { FeatureLeft } from './FeatureLeft';
import { FeatureRight } from './FeatureRight';
import { isXs } from '../../Utils/MediaQueries';

export const FeaturesSkoogPlay = () => {
	const styles = {
		imgBg: {
			backgroundImage: `url(${SkoogPlayFeaturesBg})`,
			backgroundColor: '#cccccc',
			height: '80vh',
			width: '100%',
			backgroundPosition: 'center',
			backgroundRepeat: 'no-repeat',
			backgroundSize: 'cover',
			padding: '0',
			marginTop: '10rem',
		},
	};
	return (
		<>
			{/* Engage your child's wonder serction */}
			<Container fluid style={styles.imgBg}>
				<Container
					style={{
						display: 'flex',
						height: '100%',
						alignItems: 'center',
						flexDirection: 'column',
						justifyContent: 'flex-end',
					}}
				>
					<div style={{ padding: '2rem 0rem 4rem 0rem' }}>
						<RegularTitle
							title={`Engage your child's wonder`}
							description={`SKOOG keeps children engaged, while giving them the confidence to express
                themselves`}
							styling={{ textAlign: 'center' }}
						/>
					</div>
				</Container>
			</Container>

			{/* All features section */}
			<Container
				fluid
				style={
					isXs
						? { background: `${blue}`, padding: '10rem 0rem' }
						: { background: `${blue}` }
				}
			>
				<Container style={isXs.matches ? { width: '90%' } : { width: '60%' }}>
					{FeatureIcons.map((el, index) => {
						return (
							<div key={index}>
								{index % 2 === 0 ? (
									<FeatureLeft
										src={el.src}
										alt={el.alt}
										title={el.title}
										longDescription={el.longDescription}
									/>
								) : (
									<FeatureRight
										key={index}
										src={el.src}
										alt={el.alt}
										title={el.title}
										longDescription={el.longDescription}
									/>
								)}
							</div>
						);
					})}
				</Container>
			</Container>
		</>
	);
};
