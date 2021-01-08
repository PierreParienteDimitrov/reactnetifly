import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import Packaging from '../images/packaging.png';
import ThreeWonderDots from '../images/three-wonder-dots.png';
import USB from '../images/usb.png';
import Instructions from '../images/instructions.png';
import { RegularTitle } from './RegularTitle';
import { Button } from './Button';
import { red } from '../Utils/ColorPalette';

export const Preorder = () => {
	return (
		<Container>
			<div style={{ padding: '20% 0' }}>
				<Row style={{ alignItems: 'center' }}>
					<Col sm={12} lg={6}>
						<div style={{ marginBottom: '4rem' }}>
							<h6 style={{ color: `${red}` }}>NEW!</h6>
							<RegularTitle
								title={'sign up to pre-order'}
								description={`Don't miss your chance to pre-order your Skoog! Sign up now for important updates!`}
							/>
							<img
								src={Packaging}
								alt='Skoog Packaging'
								style={{ width: '90%', marginTop: '2rem' }}
							/>
						</div>
					</Col>
					<Col sm={12} lg={6}>
						<div style={{ marginBottom: '4rem' }}>
							<h6># WONDER DOTS</h6>
							<hr />
							<img src={ThreeWonderDots} alt='Three Wonder Dots' />
						</div>
						<div style={{ display: 'flex', flexDirection: 'row', width: '100%' }}>
							<div style={{ width: '50%' }}>
								<h6>USB CABLE</h6>
								<hr />
								<img src={USB} alt='USB Cable' />
							</div>
							<div style={{ width: '50%' }}>
								<h6>INSTRUCTION</h6>
								<hr />
								<img src={Instructions} alt='Instructions' />
							</div>
						</div>
					</Col>
				</Row>
				<Row style={{ justifyContent: 'center', marginTop: '4rem' }}>
					<Button cta='Sign up now!' />
				</Row>
			</div>
		</Container>
	);
};
