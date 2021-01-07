import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import Packaging from '../images/packaging.png';
import ThreeWonderDots from '../images/three-wonder-dots.png';
import USB from '../images/usb.png';
import Instructions from '../images/instructions.png';
import { RegularTitle } from './RegularTitle';

export const Preorder = () => {
	return (
		<Container>
			<Row style={{ margin: '10% 10%' }}>
				<Col sm={12} lg={6}>
					<div>
						<h5>NEW!</h5>
						<RegularTitle
							title={'pre-order'}
							description={'Preorder your starter kit now! Starting from $99.'}
						/>
						<img src={Packaging} alt='Skoog Packaging' width='90%' />
					</div>
				</Col>
				<Col sm={12} lg={6}>
					<div>
						<h6>4 WONDER DOTS</h6>
						<hr />
						<img src={ThreeWonderDots} alt='Three Wonder Dots' />
					</div>
					<div style={{ display: 'flex', flexDirection: 'row', width: '100%' }}>
						<div style={{ width: '50%' }}>
							<h6>4 WONDER DOTS</h6>
							<hr />
							<img src={USB} alt='USB Cable' />
						</div>
						<div style={{ width: '50%' }}>
							<h6>4 WONDER DOTS</h6>
							<hr />
							<img src={Instructions} alt='Instructions' />
						</div>
					</div>
				</Col>
			</Row>
			<Row style={{ justifyContent: 'center' }}>
				<button>Pre-order now!</button>
			</Row>
		</Container>
	);
};
