import React from 'react';
import { Container } from 'react-bootstrap';
import WonderDotsHero from '../../images/WonderDotsHero.png';
import { HeroTitle } from '../HeroTitle';
import { blue } from '../../Utils/ColorPalette';
import SkoogSesameLogos from '../../images/SkoogSesameLogos.png';
import { isXs } from '../../Utils/MediaQueries';

export const HeroWonderDots = () => {
	const styles = {
		imgBgDesktop: {
			backgroundImage: `url(${WonderDotsHero})`,
			backgroundColor: '#cccccc',
			height: '85vh',
			width: '100%',
			backgroundPosition: 'center',
			backgroundRepeat: 'no-repeat',
			backgroundSize: 'cover',
			padding: '0',
		},
		imgBgMobile: {
			backgroundImage: `url(${WonderDotsHero})`,
			backgroundColor: '#cccccc',
			height: '60vh',
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
			<Container
				style={
					isXs.matches
						? { padding: '2rem 0', width: '90%' }
						: { padding: '6rem 0', width: '100%' }
				}
			>
				<div style={{ display: 'flex' }}>
					<img
						src={SkoogSesameLogos}
						alt='Sesame Street & Skoog Logos'
						width='100%'
					/>
				</div>
				<br />
				<HeroTitle
					header={'present the'}
					title={'WONDER DOTS'}
					colorTxt={`${blue}`}
				/>
			</Container>
		</Container>
	);
};
