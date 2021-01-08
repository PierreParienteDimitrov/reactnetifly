import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import TeamPicture from '../images/team.png';
import Icon1 from '../images/icon1.png';
import { blue } from '../Utils/ColorPalette';

export const OurStory = () => {
	return (
		<Container fluid style={{ background: `${blue}` }}>
			<Container style={{ padding: '4rem 0' }}>
				<Row>
					<Col sm={12} lg={5}>
						<img src={TeamPicture} alt='' width='100%' />
					</Col>
					<br />
					<Col sm={12} lg={7} style={{ marginBottom: '4rem' }}>
						<img
							src={Icon1}
							alt='Icon One'
							style={{ width: '20%', marginBottom: '2rem' }}
						/>
						<div style={{ color: 'white' }}>
							<h2>Our Story</h2>
							<br />
							<h6>Skoog teams up with Sesame Workshop to create a new way to play</h6>
							<br />
							<h4>
								Open interactive platform gives children the power to drive their own
								creative play
							</h4>
							<br />
							<p>
								January 11th, 2020 (PR Newswire) -- Lakewood, CO and New York, NY -
								SKOOG Inc., a media tech company with a mission to enrich children’s
								lives through creative and immersive play, today announced a global
								partnership with Sesame Workshop, the nonprofit organization behind
								Sesame Street, introducing a new interactive platform that merges
								tactile technology with an ever-expanding content library featuring
								Sesame Street characters. The platform combines multi-sensory creative
								play with fun, interactive content and meaningful learning experiences.
							</p>
							<br />
							<p>
								Originally focused on helping children with disabilities express their
								creativity through music, the team at SKOOG created a suite of hands-on
								technology devices that is uniquely child-friendly. SKOOG’s patented
								platform includes a parent-controlled app with unique cube-like hardware
								that lets kids play and create without relying solely on a smartphone
								screen. Sesame Street is SKOOG’s first children’s brand collaboration;
								the new platform will combine SKOOG technology with Sesame Workshop’s
								early childhood expertise and educational content to create a new
								hands-on – and screen-independent – way to play. By pressing soft,
								squeezable, interchangeable RFID Wonder Dots on their SKOOG Cube, little
								ones will be able to enjoy interactive songs, brain games, and stories
								featuring the voices of beloved Sesame Street characters.
							</p>
							<br />
							<p>
								“Children's interactive play has never been as important as it is right
								now. In today’s complex digital world, we set out on a mission to help
								motivate and inspire children, leading the shift from passive
								consumption to active engagement—while enabling children of all
								abilities to play, engage, and consume safe and smart content
								independently,” said Gregg Stein, SKOOG Inc., CEO. “As huge Sesame
								Street fans, we’re thrilled to be collaborating with Sesame Workshop, a
								community of creators, educators, and unforgettable characters built on
								diversity, equity, and inclusion. Together, we have created a
								best-in-class physical and digital creative sandbox that will empower
								millions of children to experience the joy of infinitely expandable
								personal play patterns, enabled by stories and audio books, branching
								adventures, games, musical instruments, songs and so much more.”
							</p>
							<br />
							<p>
								“Playful learning is at the heart of everything we do at Sesame
								Workshop, so we’re thrilled to work with SKOOG, Inc. to bring an
								enriching new play experience to children of all ages and abilities,”
								said Scott Chambers, Sesame Workshop’s Senior Vice President & General
								Manager, North America Media & Licensing. “We hope that our unique
								combination of SKOOG technology and Sesame Workshop’s powerful content
								will inspire kids and families to get creative together – with a little
								help from the Sesame Street Muppets!”
							</p>
						</div>
					</Col>
				</Row>
			</Container>
		</Container>
	);
};
