import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import charairest from "../../Assets/Projects/charairest.png";
import tunnel from "../../Assets/Projects/tunnel.png";
import drop2share from "../../Assets/Projects/drop2share.png";
import whatsai from "../../Assets/Projects/whatsai.jpg";

function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          My Recent <strong className="purple">Works </strong>
        </h1>
        <p style={{ color: "white" }}>Here are a few projects I've worked on recently.</p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={drop2share}
              isBlog={false}
              title="Drop2Share"
              description="Personal Chat Room or Workspace to share resources and hangout with friends build with react.js, Material-UI, and Firebase. Have features which allows user for realtime messaging, image sharing as well as supports reactions on messages."
              ghLink="https://github.com/dianudi/drop2share"
              // demoLink="https://chatify-49.web.app/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={charairest}
              isBlog={false}
              title="CharacterAI RestAPI"
              description="My personal blog page build with Next.js and Tailwind Css which takes the content from makdown files and renders it using Next.js. Supports dark mode and easy to write blogs using markdown."
              ghLink="https://github.com/dianudi/charai-restapi"
              // demoLink="https://blogs.soumya-jit.tech/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={whatsai}
              isBlog={false}
              title="Whatsapp AI Bot"
              description="My personal blog page build with Next.js and Tailwind Css which takes the content from makdown files and renders it using Next.js. Supports dark mode and easy to write blogs using markdown."
              // ghLink="https://github.com/dianudi/charai-restapi"
              // demoLink="https://blogs.soumya-jit.tech/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={tunnel}
              isBlog={false}
              title="Locatunnel Manager"
              description="Multi-instance tunnel manager for Localtunnel. Used WebUI for simple management of each tunnel. Can expose your web project or anything to the public internet via tunneling. Build with NodeJS"
              ghLink="https://github.com/dianudi/tunnel-mgr"
              // demoLink="https://blogs.soumya-jit.tech/"      <--------Please include a demo link here
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
