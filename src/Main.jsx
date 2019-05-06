import React from 'react';
import { Row, Col, Container, Button } from 'reactstrap';
import { Link } from 'react-router-dom';

const Main = () => {
	return (
		<Container className='text-center'>
			<Row>
				<Col xs='12' sm={{ size: 10, offset: 1 }}>
					{' '}
					profile Photo
				</Col>
			</Row>
			<Row>
				<Col xs='12' lg='6'>
					<Link to='resume'>
						<Button color='primary'>Resume</Button>
					</Link>
				</Col>
				<Col xs='12' lg='6'>
					<Button color='primary'>Portfolio</Button>
				</Col>
			</Row>
		</Container>
	);
};

export default Main;
