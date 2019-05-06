import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Main from './Main.jsx';
import Resume from './Resume.jsx';

const MyRouter = () => {
	return (
		<Router>
			<div>
				<Switch>
					<Route path='/' exact component={Main} />
					<Route path='/resume' exact component={Resume} />
				</Switch>
			</div>
		</Router>
	);
};

export default MyRouter;
