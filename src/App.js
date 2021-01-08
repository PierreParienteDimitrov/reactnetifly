import React from 'react';
import './App.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { Navigation } from './Components/Navigation';
import { Home } from './Pages/Home';
import { SkoogPlay } from './Pages/SkoogPlay';
import { WonderDots } from './Pages/WonderDots';
import { Story } from './Pages/Story';

function App() {
	return (
		<>
			<Router>
				<Navigation />
				<Switch>
					<Route exact path='/'>
						<Home />
					</Route>
					<Route path='/skoog-play'>
						<SkoogPlay />
					</Route>
					<Route path='/wonder-dots'>
						<WonderDots />
					</Route>
					<Route path='/story'>
						<Story />
					</Route>
				</Switch>
			</Router>
		</>
	);
}

export default App;
