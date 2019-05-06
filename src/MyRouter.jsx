import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import MenuBar from './MenuBar.jsx';
import Resume from './Resume.jsx';
import Main from './Main.jsx';
import Portfolio from './Portfolio.jsx';
import Data from './data.json';

const MyRouter = () => {
	return (
		<Router>
			<div>
				<MenuBar />
				<Switch>
					<Route path='/' exact component={Main} />
					<Route path='/resume' exact component={Resume} />
					<Route path='/portfolio' exact component={() => <Portfolio projects={Data.projects} />} />
				</Switch>
			</div>
		</Router>
	);
};

export default MyRouter;
