import * as React from "react";
import {
  Navbar,
  Container,
  Nav,
  NavDropdown,
  Card,
  Row,
  CardGroup,
  Col,
} from "react-bootstrap";
import { Link } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "./About.css";

export class About extends React.Component {
  render() {
    return (
      <Container>
        <Row>
          <Card className="bg-dark text-white">
            <Card.Img src="./images/hcm.jpg" alt="Card image" />
            <Card.ImgOverlay class="mx-auto my-auto">
              <Card.Title>Card title</Card.Title>
              <Card.Text>
                This is a wider card with supporting text below as a natural
                lead-in to additional content. This content is a little bit
                longer.
              </Card.Text>
            </Card.ImgOverlay>
          </Card>
        </Row>
        <div class="empty"></div>
        <h1>Our Story</h1>
        <Row id="outstory" className="mx-auto">
          <p>
            Consulting represents success at realizing the company is going in
            the wrong direction. The only time the company fails is when it is
            not possible to do a turnaround anymore. We help companies pivot
            into more profitable directions where they can expand and grow. It
            is inevitable that companies will end up making a few mistakes; we
            help them correct these mistakes.
          </p>
          <p>
            Consulting represents success at realizing the company is going in
            the wrong direction. The only time the company fails is when it is
            not possible to do a turnaround anymore. We help companies pivot
            into more profitable directions where they can expand and grow. It
            is inevitable that companies will end up making a few mistakes; we
            help them correct these mistakes.
          </p>
        </Row>
        <div class="empty"></div>
        <Row id="our">
          <Col class="right" md={6}>
            <img class="img" src="./images/hao_1x1.jpg"></img>
            <p>Thien Hao</p>
          </Col>
          <Col class="left" md={6}>
            <img class="img" src="./images/hao_1x1.jpg"></img>
            <p>Thien Hao</p>
          </Col>
        </Row>
        <Row id="review">
          <Col md={4}>
            <p>800</p>

            <p>Tour has done successfully</p>
          </Col>
          <Col md={4}>
            <p>80</p>

            <p>Yearly tour arrange</p>
          </Col>
          <Col md={4}>
            <p>4000</p>

            <p>Happy Clients</p>
          </Col>
        </Row>
      </Container>
    );
  }
}
