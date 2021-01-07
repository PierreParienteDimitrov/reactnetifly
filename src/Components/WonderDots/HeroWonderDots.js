import React from 'react';
import { Container } from 'react-bootstrap';
import WonderDotsHero from '../../images/WonderDotsHero.png';
import SesameStreet from '../../images/sesame-street-logo.png';
import SkoogBlue from '../../images/SkoogBlue.png';
import { HeroTitle } from '../HeroTitle';
import { blue } from '../../Utils/ColorPalette';

export const HeroWonderDots = () => {
	const styles = {
		imgBg: {
			backgroundImage: `url(${WonderDotsHero})`,
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
		<Container fluid style={styles.imgBg}>
			<Container>
				<div style={{ display: 'flex' }}>
					<img src={SesameStreet} alt='' /> <h1>&</h1> <img src={SkoogBlue} alt='' />
				</div>
				<HeroTitle
					header={'present the'}
					title={'wonder dots'}
					colorTxt={`${blue}`}
				/>
			</Container>
		</Container>
	);
};
