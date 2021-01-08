import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import JumpingSkoog from '../../images/JumpingSkoog.png';
import { HowWonderWorks } from '../../Utils/Content/HowWonderWorks';
import { Table } from '../Table';
import { isXs } from '../../Utils/MediaQueries';
import AppStores from '../../images/AppStores.png';
import WonderHow from '../../images/WonderHow.png';

export const WonderDotsHowTo = () => {
	const styles = {
		howToBg: {
			backgroundImage: `url(${WonderHow})`,
			backgroundColor: '#cccccc',
			backgroundPosition: 'center',
			backgroundRepeat: 'no-repeat',
			backgroundSize: 'cover',
			padding: '0',
		},
	};
	return (
		<Container fluid style={styles.howToBg}>
			<Container
				style={
					isXs.matches
						? { width: '94%', padding: '8rem 0', textAlign: 'center' }
						: { width: '70%', padding: '12rem 0', textAlign: 'left' }
				}
			>
				<Row style={{ alignItems: 'center' }}>
					<Col sm={12} lg={5}>
						<div
							style={{
								width: '100%',
								display: 'flex',
								justifyContent: 'center',
								marginBottom: '4rem',
							}}
						>
							<img src={JumpingSkoog} alt='' width='80%' />
						</div>
					</Col>
					<Col sm={12} lg={7}>
						<h5>HOW WONDER DOTS WORKS</h5>
						<br />
						<br />
						{HowWonderWorks.map((el, index) => {
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
		</Container>
	);
};
