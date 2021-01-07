import React from 'react';
import { HomeDescription } from '../Components/Home/HomeDescription';
import { HomeElmo } from '../Components/Home/HomeElmo';
import { HomeHero } from '../Components/Home/HomeHero';
import { HowTo } from '../Components/Home/HowTo';
import { Faq } from '../Components/Home/Faq';

export const Home = () => {
	// Checking the size of the window
	return (
		<>
			<HomeHero />
			<HomeDescription />
			<HomeElmo />
			<HowTo />
			<Faq />
		</>
	);
};
