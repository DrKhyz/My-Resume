import React from 'react'
import {
  Card,
  CardImg,
  CardText,
  CardBody,
  CardTitle,
  CardSubtitle,
  Button,
} from 'reactstrap'

const Project = props => {
  return (
    <Card className="text-center text mt-1">
      <CardImg top width="100%" src={props.img} alt="Card image cap" />
      <CardBody>
        <CardTitle>{props.title}</CardTitle>
        <CardSubtitle>{props.desc}</CardSubtitle>
        <CardSubtitle>
          Techno : {props.technos.map(tech => tech + ' ')}
        </CardSubtitle>
        <CardText>{props.text}</CardText>
        <Button className="m-1" href={props.url} target="blank">
          Go to website
        </Button>
        <Button className="m-1" href={props.src} target="blank">
          <i className="fab fa-github" />
        </Button>
        <CardSubtitle>
          Date : from {props.startDate} to {props.endDate}
        </CardSubtitle>
        <CardSubtitle>Team size : {props.team}</CardSubtitle>
      </CardBody>
    </Card>
  )
}

export default Project
