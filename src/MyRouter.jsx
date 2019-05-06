import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import MenuBar from './MenuBar.jsx';
import Resume from './Resume.jsx';
import Main from './Main.jsx';

const MyRouter = () => {
	return (
		<Router>
			<div>
				<MenuBar />
				<Switch>
					<Route path='/' exact component={Main} />
					<Route path='/resume' exact component={Resume} />
				</Switch>
			</div>
		</Router>
	);
};

export default MyRouter;
