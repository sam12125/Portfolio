
import React from "react";
import { CgCPlusPlus } from "react-icons/cg";
import {
  DiJavascript1,
  DiReact,
  DiNodejs,
  DiMongodb,
  DiHtml5,
  DiGit,
} from "react-icons/di";
import Particle from "../Particle";
import Techstack from "./Techstack";
import Toolstack from "./Toolstack";
import {
    SiVisualstudiocode,
    SiPostman,
    SiNetlify,
    SiCodesandbox,
  } from "react-icons/si";
  import { Container, Row, Col } from "react-bootstrap";

function Skills() {
  return (
    <div>
    <Container fluid className="about-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          Professional <strong className="purple">Skillset </strong>
        </h1>

        <Techstack />

        <h1 className="project-heading">
          <strong className="purple">Tools</strong> I use
        </h1>
        <Toolstack />
      </Container>
    </Container>
      {/* <Footer/> */}
      </div>
    
  );
}

export default Skills;
