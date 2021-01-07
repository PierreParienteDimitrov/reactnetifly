import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import herobg from '../../images/herobg.png';
import { HeroTitle } from '../HeroTitle';
import vignette from '../../images/vignette.png';
import productNotice from '../../images/productNotice.png';
import { yellow } from '../../Utils/ColorPalette';

export const HeroSkoogPlay = () => {
	const styles = {
		imgBg: {
			backgroundImage: `url(${herobg})`,
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
				<Row>
					<Col sm={12} lg={6}>
						<div style={{ marginTop: '15%' }}>
							<HeroTitle
								header={'A CUBE FULL OF'}
								title={'CURIOSITY'}
								colorTxt={`${yellow}`}
							/>
							<img
								src={vignette}
								alt='vignette'
								width='90%'
								style={{ marginTop: '4rem' }}
							/>
						</div>
					</Col>
					<Col sm={12} lg={6}>
						<img
							src={productNotice}
							alt=''
							style={{ width: '120%', paddingTop: '6rem' }}
						/>
					</Col>
				</Row>
			</Container>
		</Container>
	);
};
