import React from 'react';
import { AllFeatures } from '../Components/SkoogPlay/AllFeatures';
import { FeaturesSkoogPlay } from '../Components/SkoogPlay/FeaturesSkoogPlay';
import { HeroSkoogPlay } from '../Components/SkoogPlay/HeroSkoogPlay';
import { Preorder } from '../Components/Preorder';
import { Story } from '../Components/Story';

export const SkoogPlay = () => {
	return (
		<div>
			<HeroSkoogPlay />
			<FeaturesSkoogPlay />
			<AllFeatures />
			<Preorder />
			<Story />
		</div>
	);
};
