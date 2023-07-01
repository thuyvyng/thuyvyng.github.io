import { Card, Col, Container, Row } from "react-bootstrap";
import Navigation from "../components/navbar";

export default function Experience() {
  return (
    <>
      <Navigation />
      <Container>
        <br></br>
        <br></br>
        <br></br>
        <br></br>
        <h1 class="display-2"> experience</h1>
        <Row>
          <Col>
            <Card>
              <h2> Oracle</h2>
              <h2> TAHMO</h2>
              <h2> Data Interaction & Visualization Lab</h2>
              <h2> ideas42</h2>
              <p>
                i'm currently a software developer at oracle cloud on the ohai
                owls team. i started at oracle in 2020 as an intern on the
                shepherd deployment automation team; and joined full time the
                next year. for my intern project, i created sheepdog: a slack
                notification system that notify users on their deployment
                updates.
              </p>

              <p>
                i graduated from oregon state with a bachelors of science in
                computer science. while at oregon state, i was an undergraduate
                developer at <a href="https://tahmo.org/"> TAHMO</a>, which aims
                to create a network of weather stations in africa and utilize
                machine learning algorithms to provide insight on agricultural,
                climate monitoring, and hydro-meteorological applications. i
                managed the ticketing system that handles improving weather
                stations. i was also an undergraduate research assistant in the
                data interaction and visualization lab headed by{" "}
                <a href="https://minsuk.com/"> Dr. Minsuk Kahng. </a> this lab
                focuses on creating data visualization tools to help people
                learn, explore, and understand machine-learning models. in this
                lab, i have experience with designing, creating, and evaluating
                these interfaces. i was also an{" "}
                <a href="https://health.oregonstate.edu/impact">IMPACT</a> Lead
                Volunteer, Society of Women Engineers Ambassador, Project X
                Volunteer, Undergraduate Research Assistant in the{" "}
                <a href="https://liberalarts.oregonstate.edu/sps/carve-lab">
                  {" "}
                  CARVE Lab
                </a>
                , URSA Engage Research Assistant, Pre-College Programs
                Ambassador and Tour Guide, Honors College Web Editor, and
                College of Engineering Peer Tutor for CS & Math.
              </p>
              <p>
                In Spring 2021, I volunteered with Develop For Good and was
                partnered with ideas42. I helped to implement Vergil, a web app
                designed to help probationers and parolees navigate their case
                plan responsibilities within their communities.
              </p>
            </Card>
          </Col>
        </Row>
      </Container>
    </>
  );
}
