import { Card, Col, Container, Row } from "react-bootstrap";
import Navigation from "../components/navbar";

export default function Contact() {
  return (
    <>
      <Navigation />
      <Container>
        <br></br>
        <br></br>
        <br></br>
        <Row>
          <Col xs={12}>
            <Card style={{ padding: "50px" }}>
              <Card.Body>
                <h1 class="display-2"> connect with me!</h1>
                <p class="lead"> everywhere to find me, reach me @</p>

                <Card.Link href="mailto:thuyvynguy@gmail.com">email</Card.Link>
                <Card.Link href="https://github.com/thuyvyng">
                  github @ thuyvyng
                </Card.Link>
                <Card.Link href="https://www.linkedin.com/in/thuyvyng/">
                  linkedin @ thuyvyng
                </Card.Link>
                <Card.Link href="mailto:thuyvynguy@gmail.com">
                  instagram @ thuyvng
                </Card.Link>
                <Card.Link href="mailto:thuyvynguy@gmail.com">
                  goodreads @ thuyvyng
                </Card.Link>
                <Card.Link href="mailto:thuyvynguy@gmail.com">
                  spotify @ tweetynguy
                </Card.Link>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
    </>
  );
}
