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
					<Container style={{ margin: '4rem 0', width: '40%' }}>
						<img src={ElmoFriend} alt='Elmo Friend' width='100%' />
					</Container>
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
