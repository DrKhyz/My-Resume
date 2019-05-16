import React from 'react'
import { Row, Col, Container, CardImg } from 'reactstrap'

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
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Perferendis
            culpa repellendus dolor, delectus consectetur quae, dolorum eveniet
            reiciendis autem incidunt nam soluta? Provident harum eligendi
            itaque voluptatem, aliquam cumque at?
          </p>
        </Col>
      </Row>
    </Container>
  )
}

export default Main
