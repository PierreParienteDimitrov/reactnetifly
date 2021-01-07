import React from 'react';
import { Link } from 'react-router-dom';
import SesameBg from '../../images/sesame-bg.png';
import WonderDots1 from '../../images/wonder-dots-1.png';
import WonderDots2 from '../../images/wonder-dots-2.png';
import WonderDots3 from '../../images/wonder-dots-3.png';

export const HomeElmo = () => {
	const styles = {
		sesameBg: {
			display: 'flex',
			flexDirection: 'row',
			backgroundImage: `url(${SesameBg})`,
			backgroundColor: '#cccccc',
			height: '80vh',
			backgroundPosition: 'center',
			backgroundRepeat: 'no-repeat',
			backgroundSize: 'cover',
			padding: '0',
		},
	};
	return (
		<div style={styles.sesameBg}>
			<div style={{ display: 'flex', flexDirection: 'column' }}>
				<h3>Elmo and Friends</h3>
				<p>
					Squeezable & interchangeable Wonder Dots packed with interactive stories,
					character, voices, songs & more! All of it developed for your kids with
					Sesame Street!
				</p>
				<div style={{ display: 'flex', flexDirection: 'row', width: '100%' }}>
					<img src={WonderDots1} alt='' width='33%' />
					<img src={WonderDots2} alt='' width='33%' />
					<img src={WonderDots3} alt='' width='33%' />
				</div>
				<h6>
					<Link to='/wonder-dots'>BROWSE WONDER DOTS</Link>
				</h6>
			</div>
		</div>
	);
};
