import React from 'react';
import { Container } from 'react-bootstrap';
import SkoogPlayFeaturesBg from '../../images/SkoogPlay-featuresBg.png';
import { RegularTitle } from '../RegularTitle';
import { blue } from '../../Utils/ColorPalette';
import { FeatureIcons } from '../../Utils/FeatureIcons';
import { FeatureLeft } from './FeatureLeft';
import { FeatureRight } from './FeatureRight';

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
		},
	};
	return (
		<>
			<Container fluid style={styles.imgBg}>
				<Container
					style={{
						display: 'flex',
						height: '100%',
						alignItems: 'center',
						flexDirection: 'column',
						justifyContent: 'flex-end',
						paddingBottom: '10rem',
					}}
				>
					<RegularTitle
						title={`Engage your child's wonder`}
						description={`SKOOG keeps children engaged, while giving them the confidence to express
                themselves`}
						styling={{ textAlign: 'center' }}
					/>
				</Container>
			</Container>
			<Container fluid style={{ background: `${blue}` }}>
				<Container style={{ width: '60%' }}>
					{FeatureIcons.map((el, index) => {
						return (
							<>
								{index % 2 === 0 ? (
									<FeatureLeft
										key={index}
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
							</>
						);
					})}
				</Container>
			</Container>
		</>
	);
};
