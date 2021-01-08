import React from 'react';
import { Container } from 'react-bootstrap';
import SkoogOrange from '../../images/SkoogOrange.png';
import { RegularTitle } from '../RegularTitle';
import { blue } from '../../Utils/ColorPalette';
import { FeatureIcons } from '../../Utils/FeatureIcons';
import { FeatureLeft } from './FeatureLeft';
import { FeatureRight } from './FeatureRight';
import { FeatureCenter } from './FeatureCenter';
import { isXs } from '../../Utils/MediaQueries';

export const FeaturesSkoogPlay = () => {
	return (
		<>
			{/* Engage your child's wonder serction */}
			<Container fluid style={{ background: `${blue}` }}>
				<Container
					style={
						isXs.matches
							? { width: '90%', padding: '4rem 0' }
							: {
									width: '70%',
									padding: '6rem 0',
							  }
					}
				>
					<div style={{ width: '100%', display: 'flex', justifyContent: 'center' }}>
						<img src={SkoogOrange} alt='Orange Skoog' width='30%' />
					</div>
					<div style={{ padding: '2rem 0rem 0rem 0rem' }}>
						<RegularTitle
							title={`Engage your child's wonder`}
							description={`SKOOG keeps children engaged, while giving them the confidence to express
                themselves`}
							styling={{ textAlign: 'center', color: 'white' }}
						/>
					</div>
				</Container>

				{/* All features section */}
				<Container
					style={
						isXs.matches
							? { width: '90%', padding: '4rem 0' }
							: { width: '60%', padding: '6rem 0' }
					}
				>
					{FeatureIcons.map((el, index) => {
						return (
							<div key={index}>
								{isXs.matches ? (
									<FeatureCenter
										src={el.src}
										alt={el.alt}
										title={el.title}
										longDescription={el.longDescription}
									/>
								) : index % 2 === 0 ? (
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

// return (
// 	<div key={index}>
//
// 	</div>
// );
