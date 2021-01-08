import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import SkoogWorks from '../../images/skoog-works.png';
import { HowSkoogWorks } from '../../Utils/Content/HowSkoogWorks';
import { Table } from '../Table';
import { isXs } from '../../Utils/MediaQueries';
import AppStores from '../../images/AppStores.png';

export const HomeHowTo = () => {
	return (
		<Container
			style={
				isXs.matches
					? { width: '94%', padding: '4rem 0', textAlign: 'center' }
					: { width: '70%', padding: '12rem 0', textAlign: 'left' }
			}
		>
			<Row style={{ alignItems: 'center' }}>
				<Col sm={12} lg={5}>
					<Container style={{ width: '60%', marginBottom: '2rem' }}>
						<img src={SkoogWorks} alt='' width='100%' />
					</Container>
				</Col>
				<Col sm={12} lg={7}>
					<h5>HOW SKOOG WORKS</h5>
					<br />
					<br />
					{HowSkoogWorks.map((el, index) => {
						return (
							<div key={index}>
								<Table number={el.number} how={el.how} />
							</div>
						);
					})}
					<br />
					<br />
					<h6>Companion App Compatible with</h6>
					<img
						src={AppStores}
						alt='Google Play and App Store'
						style={
							isXs.matches
								? { width: '80%', marginTop: '2rem' }
								: { width: '50%', marginTop: '2rem' }
						}
					/>
				</Col>
			</Row>
		</Container>
	);
};
