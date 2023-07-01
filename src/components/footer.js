import React from "react";
import { Col, Container, Row } from "react-bootstrap";

export default function Footer() {
  return (
    <Container>
      <Row>
        <br></br>
      </Row>
      <Row>
        <Col xs={4}>
          <h3> Thuy-Vy Nguyen</h3>
          <p> software dev @ oracle cloud; based in seattle, wa</p>
        </Col>

        <Col>
          <Row>
            <h3> Contact</h3>
            <p> say hello or check out my socials!</p>
            <Col>
              {" "}
              <p>
                <a href="https://www.linkedin.com/in/thuyvyng/">
                  Linkedin: @thuyvyng
                </a>
              </p>
              <p>
                <a href="https://github.com/thuyvyng"> Github: @thuyvyng</a>
              </p>
              <p>
                <a href="https://github.com/thuyvyng">
                  {" "}
                  Email: thuyvynguy@gmail.com
                </a>
              </p>
            </Col>
            <Col>
              {" "}
              <p>
                <a href="https://www.instagram.com/thuyvyng">
                  Insta: @thuyvyng
                </a>
              </p>
              <p>
                <a href="https://open.spotify.com/user/tweetynguy">
                  {" "}
                  Spotify: @tweetynguy
                </a>
              </p>
            </Col>
          </Row>
        </Col>
      </Row>
    </Container>
  );
}
