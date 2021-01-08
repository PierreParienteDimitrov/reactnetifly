import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import StoriesBg from '../../images/StoriesBg.png';
import GoneFarming from '../../images/GoneFarming.png';
import PlayBall from '../../images/PlayBall.png';
import Mystery from '../../images/Mystery.png';
import { RegularTitle } from '../RegularTitle';
import { isXs } from '../../Utils/MediaQueries';

export const StoryPack = () => {
	const styles = {
		storyPackBg: {
			backgroundImage: `url(${StoriesBg})`,
			backgroundColor: '#cccccc',
			backgroundPosition: 'center',
			backgroundRepeat: 'no-repeat',
			backgroundSize: 'cover',
			padding: '0',
		},
	};
	return (
		<Container fluid style={styles.storyPackBg}>
			<Container
				style={
					isXs.matches
						? { width: '100%', padding: '8rem 0', textAlign: 'center' }
						: { width: '70%', padding: '12rem 0', textAlign: 'left' }
				}
			>
				<RegularTitle title={'YOUR PRE-ORDERED SKOOG PACKED WITH THREE STORIES'} />
				<Row>
					<Col sm={12} lg={4}>
						<div
							style={{
								width: '100%',
								display: 'flex',
								justifyContent: 'center',
								marginBottom: '4rem',
							}}
						>
							<img src={GoneFarming} alt='' width='80%' />
						</div>
					</Col>
					<Col sm={12} lg={4}>
						<div
							style={{
								width: '100%',
								display: 'flex',
								justifyContent: 'center',
								marginBottom: '4rem',
							}}
						>
							<img src={PlayBall} alt='' width='80%' />
						</div>
					</Col>
					<Col sm={12} lg={4}>
						<div
							style={{
								width: '100%',
								display: 'flex',
								justifyContent: 'center',
								marginBottom: '4rem',
							}}
						>
							<img src={Mystery} alt='' width='80%' />
						</div>
					</Col>
				</Row>
			</Container>
		</Container>
	);
};
