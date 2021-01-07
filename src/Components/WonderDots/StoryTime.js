import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { RegularTitle } from '../RegularTitle';
import { StoryTimeContent } from '../../Utils/Content/StoryTimeContent';
import ElmoFriend from '../../images/ElmoFriend.png';

export const StoryTime = () => {
	return (
		<Container>
			<Row style={{ alignItems: 'center' }}>
				<Col sm={12} lg={6}>
					<div style={{ marginTop: '15%' }}>
						<img src={ElmoFriend} alt='Elmo Friend' />
					</div>
				</Col>
				<Col sm={12} lg={6}>
					<RegularTitle
						title={StoryTimeContent[0].title}
						description={StoryTimeContent[0].description}
					/>
				</Col>
			</Row>
		</Container>
	);
};
