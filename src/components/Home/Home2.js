import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import pic from "../../Assets/DSC_6964.JPG";
import Tilt from "react-parallax-tilt";
import {
  AiFillGithub,
  AiOutlineTwitter,
  AiFillInstagram,
} from "react-icons/ai";
import { FaLinkedinIn } from "react-icons/fa";

function Home2() {
  return (
    <Container fluid className="home-about-section" id="about">
      <Container>
        <Row>
          <Col md={8} className="home-about-description">
            <h1 style={{ fontSize: "2.6em" }}>
              LET ME <span className="purple"> INTRODUCE </span> MYSELF
            </h1>
            <p className="home-about-body">
              I'm a <b className="purple">Frontend-Focussed Developer</b> with{" "}
              <b className="purple">3+ years of experience</b> building modern,
              scalable, and user-centric web applications.
              <br />
              <br />
              I'm passionate about creating responsive, accessible, and visually
              engaging interfaces while writing clean, maintainable code. Beyond
              frontend development, I enjoy exploring emerging web technologies,
              optimizing performance, and continuously enhancing my skills to
              build faster, smarter, and more impactful digital experiences.
              <br />
              <br />I specialize in{" "}
              <b className="purple">
                React.js, Next.js, JavaScript, TypeScript, Shopify and Node.js
              </b>{" "}
              with hands-on experience building high-performance eCommerce
              stores, CMS-driven websites, REST APIs, and conversion-focused
              digital experiences.
              <br />
              <br />
            </p>
          </Col>
          <Col md={4} className="myAvtar">
            <Tilt>
              <img
                src={pic}
                style={{ marginTop: "-80px" }}
                className="img-fluid"
                alt="avatar"
              />
            </Tilt>
          </Col>
        </Row>
      </Container>
    </Container>
  );
}
export default Home2;
