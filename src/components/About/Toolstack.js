import React from "react";
import { Col, Row } from "react-bootstrap";
import { FaJira } from "react-icons/fa";
import {
  SiVisualstudiocode,
  SiPostman,
  SiSlack,
  SiVercel,
  SiMacos,
} from "react-icons/si";

function Toolstack() {
  return (
    <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
      <Col xs={4} md={2} className="tech-icons">
      <p className="Fonticn">Jira</p>
      <FaJira />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
      <p className="Fonticn">VS code</p>
        <SiVisualstudiocode />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
      <p className="Fonticn">Postman</p>
        <SiPostman />
      </Col>
     
      <Col xs={4} md={2} className="tech-icons">
      <p className="Fonticn">Vercel</p>
        <SiVercel />
      </Col>
    </Row>
  );
}

export default Toolstack;