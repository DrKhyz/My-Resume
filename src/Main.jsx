import React from 'react';
import { Row, Col, Container, Button, CardImg } from 'reactstrap';
import { Link } from 'react-router-dom';
import profilPic from './assets/profil.jpg';

const Main = () => {
	return (
		<Container className='text-center'>
			<Row>
				<Col xs={{ size: 10, offset: 1 }} sm={{ size: 6, offset: 3 }}>
					<CardImg src={profilPic} className='profilPicStyle my-5' />
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
