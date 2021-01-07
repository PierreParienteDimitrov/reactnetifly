import React from 'react';
import { AllFeatures } from '../Components/SkoogPlay/AllFeatures';
import { FeaturesSkoogPlay } from '../Components/SkoogPlay/FeaturesSkoogPlay';
import { HeroSkoogPlay } from '../Components/SkoogPlay/HeroSkoogPlay';

export const SkoogPlay = () => {
	return (
		<div>
			<HeroSkoogPlay />
			<FeaturesSkoogPlay />
			<AllFeatures />
		</div>
	);
};
