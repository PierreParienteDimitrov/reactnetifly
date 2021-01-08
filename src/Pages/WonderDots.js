import React from 'react';
import { Preorder } from '../Components/Preorder';
import { Story } from '../Components/Story';
import { HeroWonderDots } from '../Components/WonderDots/HeroWonderDots';
import { StoryPack } from '../Components/WonderDots/StoryPack';
import { StoryTime } from '../Components/WonderDots/StoryTime';
import { WonderDotsHowTo } from '../Components/WonderDots/WonderDotsHowTo';

export const WonderDots = () => {
	return (
		<div>
			<HeroWonderDots />
			<StoryTime />
			<WonderDotsHowTo />
			<StoryPack />
			<Preorder />
			<Story />
		</div>
	);
};
