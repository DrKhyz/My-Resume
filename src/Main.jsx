import React from 'react';
import { Row, Col, Container, Button, CardImg } from 'reactstrap';
import { Link } from 'react-router-dom';

const Main = props => {
	return (
		<Container className='text-center'>
			<Row>
				<Col xs={{ size: 10, offset: 1 }} sm={{ size: 6, offset: 3 }}>
					<CardImg src={props.infos.pic} className='profilPicStyle my-5' />
				</Col>
			</Row>
			<Row>
				<Col xs='12' lg='6'>
					<Link to='/resume'>
						<Button color='primary'>Resume</Button>
					</Link>
				</Col>
				<Col xs='12' lg='6'>
					<Link to='/portfolio'>
						<Button color='primary'>Portfolio</Button>
					</Link>
				</Col>
			</Row>
		</Container>
	);
};

export default Main;
