import React from 'react';
import herobg from '../../images/herobg.png';
import product from '../../images/product.png';
import age from '../../images/age.png';
import sesameStreetLogo from '../../images/sesame-street-logo.png';
import { Container, Row, Col } from 'react-bootstrap';
import { HeroTitle } from '../HeroTitle';
import { Button } from '../Button';
import { yellow } from '../../Utils/ColorPalette';

export const HomeHero = () => {
	// const isDesktopOrLaptop = window.matchMedia('(min-width: 1200px)');

	const styles = {
		imgBg: {
			backgroundImage: `url(${herobg})`,
			backgroundColor: '#cccccc',
			height: '100vh',
			backgroundPosition: 'center',
			backgroundRepeat: 'no-repeat',
			backgroundSize: 'cover',
			padding: '0',
		},
		heroMobile: {
			margin: '20% 0 0 10%',
		},
		heroDesktop: {
			margin: '20% 0 0 30%',
		},
		logos: {
			display: 'flex',
			width: '100%',
			marginTop: '4rem',
		},
		img: {
			width: '20%',
		},
	};

	return (
		<Container fluid style={styles.imgBg} className='align-items-center'>
			<Row style={{ margin: '0 10%' }}>
				<Col sm={12} lg={6}>
					{/* <div
						style={isDesktopOrLaptop.matches ? styles.heroDesktop : styles.heroMobile}
					> */}
					<div style={{ marginTop: '15%' }}>
						<HeroTitle
							header={'ENRICHING LIVES THROUGH'}
							title={'CREATIVE PLAY'}
							colorTxt={`${yellow}`}
						/>
						<Button cta='Pre-order now!' />
						<div style={styles.logos}>
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

					{/* </div> */}
				</Col>
				<Col sm={12} lg={6}>
					<img src={product} alt='' style={{ width: '100%', paddingTop: '40px' }} />
				</Col>
			</Row>
		</Container>
	);
};
