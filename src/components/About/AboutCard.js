import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hi Everyone, I am <span className="purple">Punnam Lakshmivenkateswara </span>
            from <span className="purple"> Andrapradesh, India.</span>
            <br />
            I was compleated Training plus inturnship program in NextWave platform
            developing and integrated so many webapplication I'm expertise in Fullstack /MERN and Frontend
            <br />
            I have compleated B-Tech , Electronic communication engineering in avanthi institute of engineering and Technologies
            <br />
            <br />
            Apart from coding, some other activities that I love to do!
          </p>
          <ul>
            <li className="about-activity">
              <ImPointRight /> Playing Games
            </li>
            <li className="about-activity">
              <ImPointRight /> Enhancing Coding skills
            </li>
            <li className="about-activity">
              <ImPointRight /> Travelling
            </li>
            <li className="about-activity">
              <ImPointRight /> Developing websites 
            </li>
          </ul>

          <p style={{ color: "rgb(155 126 172)" }}>
            "Strive to build things that make a difference!"{" "}
          </p>
          <footer className="blockquote-footer">Venkateswara</footer>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;