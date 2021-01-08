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
			backgroundColor: 'white',
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
						? { width: '90%', padding: '4rem 0' }
						: { width: '80%', padding: '8rem 0' }
				}
			>
				<Row style={{ alignItems: 'center' }}>
					<Col sm={12} lg={5}>
						<Container
							style={
								isXs.matches
									? {
											width: '100%',
											margin: '4rem 0',
									  }
									: {
											width: '80%',
											margin: '4rem 0',
									  }
							}
						>
							<img src={JumpingSkoog} alt='' width='100%' />
						</Container>
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
