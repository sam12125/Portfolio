import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import prime from "../../Assets/Projects/prime.png";
import glamm from "../../Assets/Projects/glamm.png";
import travelocity from "../../Assets/Projects/travelocity.png";
import shopify1 from "../../Assets/Projects/morley stoves.png";
import shopify2 from "../../Assets/Projects/ocochi.png";
import shopify3 from "../../Assets/Projects/exeter.png";
import next1 from "../../Assets/Projects/ayuvya.png";
import next2 from "../../Assets/Projects/xentral.png";

function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          Featured <strong className="purple">Projects</strong>
        </h1>

        <p style={{ color: "white" }}>
          Here are some of the production-ready applications and solutions I've
          built.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={shopify1}
              title="Morley Stoves eCommerce Platform"
              description="Customized Shopify product pages with dynamic pricing, variant selection,VAT calculation and responsive UI to enhance the shopping experience."
              stack="Tech Stack - Shopify Liquid, JavaScript, HTML, CSS"
              deployed="https://www.morley-stoves.co.uk/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={shopify2}
              title="Ocochi Shopping Experience"
              description="Built a dynamic brand directory using the Shopify Storefront API with inventory filtering, pagination, optimized search experience, and responsive user interface."
              stack="Tech Stack - Shopify, GraphQL, JavaScript, CSS"
              deployed="https://ocochi.com/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={shopify3}
              title="Exeter CRO Enhancements"
              description="Implemented conversion-focused improvements including custom product pages, pricing logic, responsive layouts, and reusable Shopify sections."
              stack="Tech Stack - Shopify Liquid, JavaScript, CSS"
              deployed="https://exeterpaintstores.com/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={next1}
              title="Ayuvya Healthcare Platform"
              description="Developed a modern healthcare website with responsive UI, reusable components, CMS-driven content, and SEO-optimized pages to deliver a seamless user experience across all devices."
              stack="Tech Stack - Next.js, React, TypeScript, REST API"
              deployed="https://ayuvya.com/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={next2}
              title="Xentral ERP Platform"
              description="Built a high-performance business website featuring reusable components, dynamic content integration, responsive layouts, and optimized performance for an engaging user experience."
              stack="Tech Stack - Next.js, React, TypeScript, GraphQL, Hygraph CMS"
              deployed="https://xentral.com/de"
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
