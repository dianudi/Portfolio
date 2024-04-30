import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hi Everyone, I am <span className="purple">Dian </span>
            from <span className="purple">Subang West Java, Indonesia.</span>
            <br />
            I have been a self-taught programmer since 2021 and am interested in web app development.
            <br />
            I have experience working with Laravel, NodeJS, and other web development tools. I am a full stack developer as well.
            <br />
            <br />
            Apart from coding, some other activities that I love to do!
          </p>
          <ul>
            <li className="about-activity">
              <ImPointRight /> Playing Games
            </li>
            <li className="about-activity">
              <ImPointRight /> Develop Hobbies in Electronics
            </li>
          </ul>

          <p style={{ color: "rgb(155 126 172)" }}>"Belajar itu harus, pintar itu bonus" </p>
          <footer className="blockquote-footer">Dianudi</footer>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
