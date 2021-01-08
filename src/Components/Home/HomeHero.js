import React from 'react';
import herobg from '../../images/herobg.png';
import product from '../../images/product.png';
import age from '../../images/age.png';
import sesameStreetLogo from '../../images/sesame-street-logo.png';
import { Container, Row, Col } from 'react-bootstrap';
import { HeroTitle } from '../HeroTitle';
import { Button } from '../Button';
import { yellow, primary } from '../../Utils/ColorPalette';
import { isXs } from '../../Utils/MediaQueries';

export const HomeHero = () => {
	// const isDesktopOrLaptop = window.matchMedia('(min-width: 1200px)');

	const styles = {
		imgBgDesktop: {
			backgroundImage: `url(${herobg})`,
			backgroundColor: '#cccccc',
			height: '100vh',
			backgroundPosition: 'center',
			backgroundRepeat: 'no-repeat',
			backgroundSize: 'cover',
			padding: '0',
		},
		mobileBg: {
			height: '100%',
			backgroundColor: `${primary}`,
		},
		heroDesktop: {
			margin: '20% 0 0 30%',
		},
		img: {
			width: '20%',
		},
	};

	return (
		<Container
			fluid
			style={isXs.matches ? styles.mobileBg : styles.imgBgDesktop}
			className='align-items-center'
		>
			<Container>
				<Row>
					<Col sm={12} lg={6}>
						<div
							style={
								isXs.matches
									? { marginTop: '5rem', textAlign: 'center' }
									: { marginTop: '10rem' }
							}
						>
							<HeroTitle
								header={'MEET THE SKOOG, A CUBE FULL OF'}
								title={'CURIOSITY'}
								colorTxt={`${yellow}`}
							/>
							<div style={{ marginTop: '2rem' }}>
								<h6 style={{ color: 'white' }}>
									Sign up now and we will notify you soon about our release!
								</h6>
								<br />
								<Button cta='Sign up now!' />
							</div>
							<div
								style={
									isXs.matches
										? { margin: '2rem 0 2rem 0', textAlign: 'center' }
										: { marginTop: '10rem' }
								}
							>
								<img
									src={age}
									alt=''
									style={{ width: '75px', height: '75px', marginRight: '10px' }}
								/>
								<img
									src={sesameStreetLogo}
									alt=''
									style={{ width: '150px', height: '75px' }}
								/>
							</div>
						</div>
					</Col>
					<Col sm={12} lg={6}>
						<img src={product} alt='' style={{ width: '100%' }} />
					</Col>
				</Row>
			</Container>
		</Container>
	);
};
