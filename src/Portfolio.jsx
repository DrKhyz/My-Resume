import React from 'react'
import { Row, Col } from 'reactstrap'
import Project from './Project.jsx'

const Portfolio = props => {
  return (
    <div>
      <Row noGutters>
        {props.projects.map((project, i) => (
          <Col
            lg={{ offset: 0, size: 6 }}
            xs={{ offset: 1, size: 10 }}
            className="mb-2"
            key={i}
          >
            <Project {...project} />
          </Col>
        ))}
      </Row>
    </div>
  )
}

export default Portfolio
