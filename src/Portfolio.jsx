import React from 'react';
import { Row, Col } from 'reactstrap';
import Project from './Project.jsx';

const Portfolio = props => {
	return (
		<div>
			<Row noGutters>
				{props.projects.map((project, i) => (
					<Col lg='6' key={i}>
						<Project {...project} />
					</Col>
				))}
			</Row>
		</div>
	);
};

export default Portfolio;
