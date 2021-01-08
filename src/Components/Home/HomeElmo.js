import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import SesameBg from '../../images/sesame-bg.png';
import { RegularTitle } from '../RegularTitle';
import { LinkBtn } from '../LinkBtn';
import { yellow } from '../../Utils/ColorPalette';

export const HomeElmo = () => {
	const styles = {
		imgBgDesktop: {
			display: 'flex',
			flexDirection: 'row',
			backgroundImage: `url(${SesameBg})`,
			backgroundColor: '#cccccc',
			height: '80vh',
			backgroundPosition: 'center',
			backgroundRepeat: 'no-repeat',
			backgroundSize: 'cover',
			padding: '0',
		},
		mobileBg: {
			backgroundColor: `${yellow}`,
			height: '80vh',
		},
	};
	return (
		<Container fluid style={styles.imgBgDesktop} className='align-items-center'>
			<Container>
				<Row>
					<Col sm={12} lg={6} style={{ alignItems: 'center' }}>
						<RegularTitle
							title={'Elmo & Friends'}
							description={`Squeezable & interchangeable Wonder Dots packed with interactive stories, character, voices, songs & more!`}
						/>
						<LinkBtn href={'/wonder-dots'} text={'BROWSE WONDER DOTS'} />
					</Col>
					<Col sm={12} lg={6}></Col>
				</Row>
			</Container>
		</Container>
	);
};
