import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import rtcchat from "../../Assets/Projects/rtcchat.webp";
import tunnel from "../../Assets/Projects/tunnel.webp";
import drop2share from "../../Assets/Projects/drop2share.webp";
import whatsai from "../../Assets/Projects/whatsai.webp";
import inertiacell from "../../Assets/Projects/inertiacell.webp";
import linktree from "../../Assets/Projects/linktree.webp";
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
              imgPath={rtcchat}
              isBlog={false}
              title="RTC Simple Chat App"
              description=" A real-time chat application using WebRTC for peer-to-peer data channels and WebSockets for signaling. This allows users to chat directly with each other, supporting text messages, image sharing, voice notes, video sharing, and file sharing. "
              ghLink="https://github.com/dianudi/rtc-chat"
              // demoLink="https://"
            />
          </Col>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={linktree}
              isBlog={false}
              title="Linktree Clone"
              description="Create a website like Linktree that contains a list of links and pop-up modals for sharing links to social media. Build with Vite, TailwindCSS, and AlpineJS. "
              ghLink="https://github.com/dianudi/drop2share"
              demoLink="https://dianudi.github.io/linktreee"
            />
          </Col>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={inertiacell}
              isBlog={false}
              title="InertialCell Landing Page"
              description="Landing page website for mobile phone repair service and electronic repair. Build with Vite as a module bundler, Tailwindcss as a CSS framework, and DaisyUI to create a beautiful  static website using these tools."
              ghLink="https://github.com/dianudi/inertialcell-landing"
              demoLink="https://inertiacell.dianudi.my.id/"
            />
          </Col>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={drop2share}
              isBlog={false}
              title="Drop2Share"
              description="The Web Filesharing project can easily share your file around the world. build with Laravel, Bootstrap."
              ghLink="https://github.com/dianudi/drop2share"
              // demoLink="https://chatify-49.web.app/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={whatsai}
              isBlog={false}
              title="Whatsapp AI Bot"
              description="My WhatsApp bot's main feature is chat with AI characters. AI characters from anime. Build with NodeJS."
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
