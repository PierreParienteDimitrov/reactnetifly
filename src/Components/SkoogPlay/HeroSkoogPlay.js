import React from 'react';
import herobgblue from '../../images/HomeHeroBlue.png';
import Vignette from '../../images/vignette.png';
import VignetteMobile from '../../images/VignetteMobile.png';
import ProductNotice from '../../images/productNotice.png';
import { Container, Row, Col } from 'react-bootstrap';
import { HeroTitle } from '../HeroTitle';
import { yellow, primary } from '../../Utils/ColorPalette';
import { isXs } from '../../Utils/MediaQueries';

export const HeroSkoogPlay = () => {
	const styles = {
		imgBgDesktop: {
			backgroundImage: `url(${herobgblue})`,
			backgroundColor: '#cccccc',
			height: '100vh',
			backgroundPosition: 'center',
			backgroundRepeat: 'no-repeat',
			backgroundSize: 'cover',
			padding: '0',
		},
		mobileBg: {
			height: '100%',
			padding: '2rem 0rem 6rem 0rem',
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
				<Row style={{ alignItems: 'center' }}>
					<Col sm={12} lg={6}>
						<div
							style={
								isXs.matches
									? { marginTop: '5rem', textAlign: 'center' }
									: { marginTop: '5rem' }
							}
						>
							<HeroTitle
								header={`Enriching Children's Lives Through Creative Play`}
								title={'CREATIVE PLAY'}
								colorTxt={`${yellow}`}
							/>
							<div
								style={
									isXs.matches
										? { margin: '2rem 0 2rem 0', textAlign: 'center', width: '100%' }
										: { marginTop: '4rem' }
								}
							>
								<img
									src={isXs.matches ? VignetteMobile : Vignette}
									alt=''
									style={isXs.matches ? { width: '90%' } : { width: '100%' }}
								/>
							</div>
						</div>
					</Col>
					<Col sm={12} lg={6}>
						<div style={{ width: '100%', display: 'flex', justifyContent: 'center' }}>
							<img
								src={ProductNotice}
								alt=''
								style={isXs.matches ? { width: '90%' } : { width: '100%' }}
							/>
						</div>
					</Col>
				</Row>
			</Container>
		</Container>
	);
};
