import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import WonderDotsHero from '../../images/WonderDotsHero.png';
import WonderDotsHeroMobile from '../../images/WonderDotsHeroMobile.png';

import { HeroTitle } from '../HeroTitle';
import { blue } from '../../Utils/ColorPalette';
import SkoogSesameLogos from '../../images/SkoogSesameLogos.png';
import { isXs } from '../../Utils/MediaQueries';

export const HeroWonderDots = () => {
	const styles = {
		imgBgDesktop: {
			backgroundImage: `url(${WonderDotsHero})`,
			backgroundColor: 'white',
			height: '85vh',
			width: '100%',
			backgroundPosition: 'center',
			backgroundRepeat: 'no-repeat',
			backgroundSize: 'cover',
			padding: '0',
		},
		imgBgMobile: {
			backgroundImage: `url(${WonderDotsHeroMobile})`,
			backgroundColor: 'white',
			height: '100vh',
			width: '100%',
			backgroundPosition: 'center',
			backgroundRepeat: 'no-repeat',
			backgroundSize: 'cover',
			padding: '0',
		},
	};
	return (
		<Container
			fluid
			style={isXs.matches ? styles.imgBgMobile : styles.imgBgDesktop}
		>
			<Container style={isXs.matches ? { width: '100%' } : { width: '100%' }}>
				<Row>
					<Col sm={12} lg={6}>
						<Container
							style={
								isXs.matches
									? { padding: '2rem 0', width: '90%' }
									: {
											padding: '6rem 0',
											width: '90%',
											display: 'flex',
											flexDirection: 'column',
											justifyContent: 'left',
									  }
							}
						>
							<Container>
								<img
									src={SkoogSesameLogos}
									alt='Sesame Street & Skoog Logos'
									width='100%'
								/>
							</Container>
							<br />
							<HeroTitle
								header={'present the'}
								title={'WONDER DOTS'}
								colorTxt={`${blue}`}
							/>
						</Container>
					</Col>
					<Col sm={12} lg={6}></Col>
				</Row>
			</Container>
		</Container>
	);
};
