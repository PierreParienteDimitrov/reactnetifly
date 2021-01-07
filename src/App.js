import React from 'react';
import './App.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { Navbar } from './Components/Navbar';
import { Home } from './Pages/Home';
import { SkoogMedia } from './Pages/SkoogMedia';
import { WonderDots } from './Pages/WonderDots';
import { Story } from './Pages/Story';

function App() {
	return (
		<>
			<Router>
				<Navbar />
				<Switch>
					<Route exact path='/'>
						<Home />
					</Route>
					<Route exact path='/skoog-media'>
						<SkoogMedia />
					</Route>
					<Route exact path='/wonder-dots'>
						<WonderDots />
					</Route>
					<Route exact path='/story'>
						<Story />
					</Route>
				</Switch>
			</Router>
		</>
	);
}

export default App;
