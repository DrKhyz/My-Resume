import React from 'react';
import { Row, Col, Container, Button } from 'reactstrap';

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
					<Button color='primary'>Resume</Button>
				</Col>
				<Col xs='12' lg='6'>
					<Button color='primary'>Portfolio</Button>
				</Col>
			</Row>
		</Container>
	);
};

export default Main;
