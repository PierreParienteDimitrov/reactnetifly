import React from 'react';
import { Container, Accordion, Card, Button } from 'react-bootstrap';
import FAQ from '../../images/FAQ.png';
import { RegularTitle } from '../RegularTitle';
import SkoogFun from '../../images/SkoogFun.png';
import { isXs } from '../../Utils/MediaQueries';
import { blue } from '../../Utils/ColorPalette';

export const Faq = () => {
	const styles = {
		faqBgDesktop: {
			backgroundImage: `url(${FAQ})`,
			backgroundColor: '#cccccc',
			height: '100%',
			backgroundPosition: 'center',
			backgroundRepeat: 'no-repeat',
			backgroundSize: 'cover',
			padding: '4rem 0',
		},
		faqBgMobile: {
			backgroundColor: `${blue}`,
			height: '100%',
			padding: '4rem 0',
		},
	};

	return (
		<Container
			fluid
			style={isXs.matches ? styles.faqBgMobile : styles.faqBgDesktop}
		>
			<Container
				style={
					isXs.matches
						? { width: '90%', padding: '4rem 0' }
						: { width: '50%', padding: '6rem 0' }
				}
			>
				<Container
					style={
						isXs.matches
							? { width: '90%', paddingBottom: '2rem' }
							: { width: '70%', paddingBottom: '6rem' }
					}
				>
					<img src={SkoogFun} alt='' width='100%' />
				</Container>

				<RegularTitle title={'SKOOG PLAY FAQ'} styling={{ color: 'white' }} />
				<Accordion>
					<Card style={{ backgroundColor: 'transparent', border: 'none' }}>
						<Card.Header>
							<Accordion.Toggle as={Button} variant='link' eventKey='0'>
								<h4 style={{ color: 'white' }}>
									What is the appropriate age range for the Skoog?
								</h4>
							</Accordion.Toggle>
						</Card.Header>
						<Accordion.Collapse eventKey='0'>
							<Card.Body>
								<p style={{ color: 'white' }}>
									The Skoog can be used with children as young as three and will grow
									along with the child. Interchanging Wonder Dots allow for ever
									expanding content.
								</p>
							</Card.Body>
						</Accordion.Collapse>
					</Card>
					<Card style={{ backgroundColor: 'transparent', border: 'none' }}>
						<Card.Header>
							<Accordion.Toggle as={Button} variant='link' eventKey='0'>
								<h4 style={{ color: 'white' }}>Can My Child Play this Without Me?</h4>
							</Accordion.Toggle>
						</Card.Header>
						<Accordion.Collapse eventKey='0'>
							<Card.Body>
								<p style={{ color: 'white' }}>
									The Skoog can be a great family activity, but with headphone ports,
									children can play and learn on their own, without disrupting people
									around them
								</p>
							</Card.Body>
						</Accordion.Collapse>
					</Card>
					<Card style={{ backgroundColor: 'transparent', border: 'none' }}>
						<Card.Header>
							<Accordion.Toggle as={Button} variant='link' eventKey='0'>
								<h4 style={{ color: 'white' }}>Can I use the Skoog on the Go?</h4>
							</Accordion.Toggle>
						</Card.Header>
						<Accordion.Collapse eventKey='0'>
							<Card.Body>
								<p style={{ color: 'white' }}>
									Yes! Skoog comes with a USB charging cord and an expected battery life
									of ** hours. The headphone jack is great to let kids play no matter
									where they are!
								</p>
							</Card.Body>
						</Accordion.Collapse>
					</Card>
					<Card style={{ backgroundColor: 'transparent', border: 'none' }}>
						<Card.Header>
							<Accordion.Toggle as={Button} variant='link' eventKey='0'>
								<h4 style={{ color: 'white' }}>What is included in the Starter Set?</h4>
							</Accordion.Toggle>
						</Card.Header>
						<Accordion.Collapse eventKey='0'>
							<Card.Body>
								<p style={{ color: 'white' }}>
									When you order a Skoog Starter Set, you'll receive 4 Wonder Dots, a USB
									charging cord, and instructions to get you playing right away.
								</p>
							</Card.Body>
						</Accordion.Collapse>
					</Card>
				</Accordion>
			</Container>
		</Container>
	);
};
