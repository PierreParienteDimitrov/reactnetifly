import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import TeamPicture from '../images/team-picture.png';

export const Story = () => {
	return (
		<Container fluid style={{ background: 'red' }}>
			<Container>
				<Row>
					<Col sm={12} lg={6}>
						<div>
							<h4>Our Story</h4>
							<p>
								Company story telling. Describe your mission, your values, why the Skoog
								is good fod kids.
							</p>
						</div>
					</Col>
					<Col sm={12} lg={6}>
						<img src={TeamPicture} alt='' width='100%' />
					</Col>
				</Row>
			</Container>
		</Container>
	);
};
