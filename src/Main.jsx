import React from "react";
import { Row, Col, Container, CardImg } from "reactstrap";

const Main = props => {
  return (
    <Container className="text-center text-white">
      <Row>
        <Col xs={{ size: 10, offset: 1 }} sm={{ size: 6, offset: 3 }}>
          <CardImg src={props.infos.pic} className="profilPicStyle my-5" />
        </Col>
      </Row>
      <Row>
        <Col xs="12" lg={{ size: 6, offset: 3 }}>
          <p>
            Autodidacte dans le développement web, j'ai décidé, après 9 ans de
            travail dans la restauration, de me tourner pleinement dans ce
            domaine. Sortie d'une formation intense portant principalement sur
            React et NodeJS, je suis motivé et intéressé par l'apprentissage de
            nouvelles technologies.
          </p>
        </Col>
      </Row>
    </Container>
  );
};

export default Main;
