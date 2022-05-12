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
} from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import "./Home.css";

export class Home extends React.Component {
  render() {
    return (
      <Container id="home-container">
        <Row>
          <Carousel>
            <Carousel.Item interval={1000}>
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
            <Carousel.Item interval={500}>
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
            <h3>Where you want to go?</h3>
          </Col>
          <Col md={3}>
            <InputGroup className="mb-3">
              <FormControl
                aria-label="Default"
                aria-describedby="inputGroup-sizing-default"
              />
            </InputGroup>
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
                <Dropdown.Item href="#/action-1">Action</Dropdown.Item>
                <Dropdown.Item href="#/action-2">Another action</Dropdown.Item>
                <Dropdown.Item href="#/action-3">Something else</Dropdown.Item>
              </Dropdown.Menu>
            </Dropdown>
          </Col>
          <Col md={2}>
            <Button variant="success">Success</Button>{" "}
          </Col>
        </Row>
      </Container>
    );
  }
}
