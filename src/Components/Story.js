import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import TeamPicture from '../images/team.png';
import Icon1 from '../images/icon1.png';
import { RegularTitle } from '../Components/RegularTitle';
import { yellow } from '../Utils/ColorPalette';
import { LinkBtn } from '../Components/LinkBtn';

export const Story = () => {
	return (
		<Container fluid style={{ background: `${yellow}` }}>
			<Container style={{ padding: '4rem 0' }}>
				<Row style={{ alignItems: 'center' }}>
					<Col sm={12} lg={6}>
						<img src={TeamPicture} alt='' width='100%' />
					</Col>
					<br />
					<Col sm={12} lg={6} style={{ marginBottom: '4rem' }}>
						<img
							src={Icon1}
							alt='Icon One'
							style={{ width: '20%', marginBottom: '2rem' }}
						/>
						<RegularTitle
							title={'Our Story'}
							description={`We’re on a mission to ignite creativity and imaginative play in children. Skoog gives children a screen-free digital way to explore and experience learning.`}
						/>

						<LinkBtn align={'left'} href={'/story'} text={'Read our story'} />
					</Col>
				</Row>
			</Container>
		</Container>
	);
};
