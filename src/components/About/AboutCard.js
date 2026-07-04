import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hi Everyone, I am <span className="purple">Saiyam Vaid </span>
            from <span className="purple"> Meerut, India.</span>
            <br />
            I'm a <span className="purple">
              Frontend-Focused Developer{" "}
            </span>{" "}
            with <span className="purple">3+ years of experience</span> building
            modern web applications, eCommerce solutions, and high-performance
            user interfaces. My journey into technology began with a curiosity
            about how websites and applications work, which eventually grew into
            a passion for creating digital experiences that are fast, intuitive,
            and impactful.
            <br />
            <br />
            I've worked extensively with{" "}
            <span className="purple">
              React.js, Next.js, Shopify, JavaScript, TypeScript, and Node.js
            </span>{" "}
            building scalable products, CMS-driven websites, and
            conversion-focused solutions while continuously learning and
            exploring new technologies.
            <br></br>
            <br></br>
            Apart from coding, here are a few things I enjoy:<br></br>
            <br />
            ♟️ Playing Chess<br></br>
            🎬 Watching Movies<br></br>
            ✈️ Travelling<br></br>
          </p>

          <p style={{ color: "rgb(155 126 172)" }}>
            "Strive to build products that create meaningful experiences and make a difference."{" "}
          </p>
          <footer className="blockquote-footer">Saiyam</footer>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
