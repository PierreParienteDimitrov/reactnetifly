import React from 'react';
import { Container, Accordion, Card, Button } from 'react-bootstrap';
import FAQ from '../../images/FAQ.png';

export const Faq = () => {
	const styles = {
		faqBg: {
			backgroundImage: `url(${FAQ})`,
			backgroundColor: '#cccccc',
			height: '120vh',
			backgroundPosition: 'center',
			backgroundRepeat: 'no-repeat',
			backgroundSize: 'cover',
			padding: '0',
		},
	};

	return (
		<Container fluid style={styles.faqBg}>
			<Container style={{ paddingTop: '30%' }}>
				<h1>FAQ</h1>
				<Accordion>
					<Card style={{ backgroundColor: 'transparent', border: 'none' }}>
						<Card.Header>
							<Accordion.Toggle as={Button} variant='link' eventKey='0'>
								Click me!
							</Accordion.Toggle>
						</Card.Header>
						<Accordion.Collapse eventKey='0'>
							<Card.Body>Hello! I'm the body</Card.Body>
						</Accordion.Collapse>
					</Card>
				</Accordion>
			</Container>
		</Container>
	);
};
