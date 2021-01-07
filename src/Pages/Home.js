import React from 'react';
import { HomeDescription } from '../Components/Home/HomeDescription';
import { HomeHero } from '../Components/Home/HomeHero';

export const Home = () => {
	// Checking the size of the window
	return (
		<>
			<HomeHero />
			<HomeDescription />
		</>
	);
};
