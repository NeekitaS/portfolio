import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import leaf from "../../Assets/Projects/leaf.png";
import emotion from "../../Assets/Projects/emotion.png";
import editor from "../../Assets/Projects/codeEditor.png";
import chatify from "../../Assets/Projects/chatify.png";
import suicide from "../../Assets/Projects/suicide.png";
import bitsOfCode from "../../Assets/Projects/blog.png";

function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          My Recent <strong className="purple">Works </strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are a few projects I've worked on recently.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={editor}
              isBlog={false}
              title="Lorem ipsum dolor sit amet consectetur."
              description="Lorem, ipsum dolor sit amet consectetur adipisicing elit. Consequuntur est consectetur illo voluptatibus pariatur odio eius cum inventore laudantium vitae!"
              ghLink="https://github.com"
              demoLink="https://"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={editor}
              isBlog={false}
              title="Lorem ipsum dolor."
              description="Lorem, ipsum dolor sit amet consectetur adipisicing elit. Consequuntur est consectetur illo voluptatibus pariatur odio eius cum inventore laudantium vitae!"
              ghLink="https://github.com/"
              demoLink="https://"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={editor}
              isBlog={false}
              title="Lorem ipsum dolor."
              description="Lorem, ipsum dolor sit amet consectetur adipisicing elit. Consequuntur est consectetur illo voluptatibus pariatur odio eius cum inventore laudantium vitae!"
              ghLink="https://github.com/"
              demoLink="https://.tech/"              
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={editor}
              isBlog={false}
              title="Lorem ipsum dolor sit."
              description="Lorem, ipsum dolor sit amet consectetur adipisicing elit. Consequuntur est consectetur illo voluptatibus pariatur odio eius cum inventore laudantium vitae!"
              ghLink="https://github.com/"
              demoLink="https://herokuapp.com/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={editor}
              isBlog={false}
              title="Lorem ipsum dolor sit amet consectetur."
              description="Lorem, ipsum dolor sit amet consectetur adipisicing elit. Consequuntur est consectetur illo voluptatibus pariatur odio eius cum inventore laudantium vitae!"
              ghLink="https://github.com/"
              // demoLink="https://www.youtube.com/watch?v=dQw4w9WgXcQ&ab_channel=RickAstley" <--------Please include a demo link here
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={editor}
              isBlog={false}
              title="Lorem ipsum dolor sit amet consectetur."
              description="Lorem, ipsum dolor sit amet consectetur adipisicing elit. Consequuntur est consectetur illo voluptatibus pariatur odio eius cum inventore laudantium vitae!"
              ghLink="https://github.com/"
              // demoLink="https://blogs.soumya-jit.tech/"      <--------Please include a demo link here 
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
