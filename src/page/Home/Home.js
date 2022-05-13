import * as React from "react";
import {
  Container,
  Row,
  Col,
  Carousel,
  Button,
  Dropdown,
  InputGroup,
  Input,
  FormControl,
  Form,
  Card,
} from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import "./Home.css";
import { width } from "@mui/system";

export class Home extends React.Component {
  render() {
    return (
      <Container fluid id="home-container">
        <Row>
          <Carousel>
            <Carousel.Item interval={2000}>
              <img
                className="d-block w-100"
                src="/images/hcm.jpg"
                alt="First slide"
              />
              <Carousel.Caption>
                <h3>First slide label</h3>
                <p>
                  Nulla vitae elit libero, a pharetra augue mollis interdum.
                </p>
              </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item interval={2000}>
              <img
                className="d-block w-100"
                src="/images/hagiang.jpg"
                alt="Second slide"
              />
              <Carousel.Caption>
                <h3>Second slide label</h3>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
              </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
              <img
                className="d-block w-100"
                src="/images/phanthiet.jpg"
                alt="Third slide"
              />
              <Carousel.Caption>
                <h3>Third slide label</h3>
                <p>
                  Praesent commodo cursus magna, vel scelerisque nisl
                  consectetur.
                </p>
              </Carousel.Caption>
            </Carousel.Item>
          </Carousel>
        </Row>
        <Row id="home-search">
          <Col md={3}>
            <h4>Where you want to go?</h4>
          </Col>
          <Col md={3} id="input">
            <Form.Control type="text" placeholder="Where to go?" />
          </Col>
          <Col md={2}>
            <Dropdown>
              <Dropdown.Toggle variant="success" id="dropdown-basic">
                Date
              </Dropdown.Toggle>

              <Dropdown.Menu>
                <Dropdown.Item href="#/action-1">Action</Dropdown.Item>
                <Dropdown.Item href="#/action-2">Another action</Dropdown.Item>
                <Dropdown.Item href="#/action-3">Something else</Dropdown.Item>
              </Dropdown.Menu>
            </Dropdown>
          </Col>
          <Col md={2}>
            <Dropdown>
              <Dropdown.Toggle variant="success" id="dropdown-basic">
                Travel Type
              </Dropdown.Toggle>

              <Dropdown.Menu>
                <Dropdown.Item href="#/action-1">
                  Cultural tourism, history
                </Dropdown.Item>
                <Dropdown.Item href="#/action-2">Ecotourism</Dropdown.Item>
                <Dropdown.Item href="#/action-3">Tourist Resort</Dropdown.Item>
              </Dropdown.Menu>
            </Dropdown>
          </Col>
          <Col md={2}>
            <Button variant="success" id="btn-search">
              Search
            </Button>{" "}
          </Col>
        </Row>
        <Row id="popular-dest">
          <h2>Popular Destination</h2>
          <p>
            Suffered alteration in some form, by injected humour or good day
            randomised booth anim 8-bit hella wolf moon beard words.
          </p>
          <Row xs={1} md={3} className="g-4">
            {Array.from({ length: 6 }).map((_, idx) => (
              <Col>
                <Card>
                  <Card.Img variant="top" src="./images/camp.jpg" />
                  <Card.Body>
                    <Card.Title>Viet Nam</Card.Title>
                    <Card.Text>10 places</Card.Text>
                  </Card.Body>
                </Card>
              </Col>
            ))}
          </Row>
        </Row>
        <Row id="subscribe">
          <Col md={6}>
            <h2>Subscribe Our Newsletter</h2>
            <p>
              Subscribe newsletter to get offers and about new places to
              discover.
            </p>
          </Col>
          <Col md={4}>
            <Form.Control type="text" placeholder="Your email" />
          </Col>
          <Col md={2}>
            <Button variant="success" id="btn-subscrice">
              Subscribe
            </Button>{" "}
          </Col>
        </Row>
        <Row id="popular-places">
          <h2>Popular Places</h2>
          <p>
            Suffered alteration in some form, by injected humour or good day
            randomised booth anim 8-bit hella wolf moon beard words.
          </p>
          <Row xs={1} md={3} className="g-4">
            {Array.from({ length: 6 }).map((_, idx) => (
              <Col>
                <Card>
                  <Card.Img variant="top" src="./images/camp.jpg" />
                  <Card.Body>
                    <Card.Title>Viet Nam</Card.Title>
                    <Card.Text>10 places</Card.Text>
                  </Card.Body>
                </Card>
              </Col>
            ))}
          </Row>
          <Button variant="success" id="btn-more">
            More Places
          </Button>{" "}
        </Row>
        <Row id="video">
          <div>
            <video
              src="./videos/vietnam-cinematic.mp4"
              autoPlay="true"
              type="video/mp4"
            ></video>
          </div>
        </Row>
      </Container>
    );
  }
}
