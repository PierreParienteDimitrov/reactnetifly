import React from 'react';
import { Navbar, Nav, Container } from 'react-bootstrap';
import { blue } from '../Utils/ColorPalette';
import SkoogLogoWhite from '../images/SkoogLogoWhite.png';
import { Link } from 'react-router-dom';
import { yellow } from '../Utils/ColorPalette';
import { isXs } from '../Utils/MediaQueries';

export const Navigation = () => {
	return (
		<Navbar
			collapseOnSelect
			expand='lg'
			variant='dark'
			style={{ background: `${blue}` }}
		>
			<Navbar.Brand href='/'>
				<img src={SkoogLogoWhite} alt='Skoog Logo White' />
			</Navbar.Brand>
			<Navbar.Toggle aria-controls='responsive-navbar-nav' />
			<Navbar.Collapse id='responsive-navbar-nav'>
				<Nav
					style={{
						width: '100%',
						display: 'flex',
						justifyContent: 'space-between',
					}}
				>
					<Container
						style={
							isXs.matches
								? {
										width: '100%',
										display: 'flex',
										height: '30vh',
										flexDirection: 'column',
										justifyContent: 'space-around',
								  }
								: { width: '70%' }
						}
					>
						<Link to='/skoog-play'>
							<h6 style={{ color: 'white', cursor: 'pointer', paddingLeft: '10rem' }}>
								Skoog Play
							</h6>
						</Link>

						<Link to='/wonder-dots'>
							<h6 style={{ color: 'white', cursor: 'pointer', paddingLeft: '10rem' }}>
								Wonder Dots
							</h6>
						</Link>

						<Link to='/story'>
							<h6 style={{ color: 'white', cursor: 'pointer', paddingLeft: '10rem' }}>
								Our Story
							</h6>
						</Link>
					</Container>
					<Container
						style={
							isXs.matches
								? {
										display: 'flex',
										justifyContent: 'center',
										padding: '2rem 0 4rem 0',
										width: '100%',
								  }
								: {
										display: 'flex',
										justifyContent: 'flex-end',
										paddingRight: '6rem',
										width: '100%',
								  }
						}
					>
						<h6 style={{ color: `${yellow}` }}>Sign up now!</h6>
					</Container>
				</Nav>
			</Navbar.Collapse>
		</Navbar>
	);
};
