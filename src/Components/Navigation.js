import React from 'react';
import { Navbar, Nav } from 'react-bootstrap';
import { blue } from '../Utils/ColorPalette';
import SkoogLogoWhite from '../images/SkoogLogoWhite.png';

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
				<Nav>
					<Nav.Link href='/skoog-play'>
						<h6 style={{ color: 'white', cursor: 'pointer', paddingLeft: '10rem' }}>
							Skoog Play
						</h6>
					</Nav.Link>
					<Nav.Link href='/wonder-dots'>
						<h6 style={{ color: 'white', cursor: 'pointer' }}>Wonder Dots</h6>
					</Nav.Link>
					<Nav.Link href='/story'>
						<h6 style={{ color: 'white', cursor: 'pointer' }}>Our Story</h6>
					</Nav.Link>
				</Nav>
			</Navbar.Collapse>
		</Navbar>
	);
};
