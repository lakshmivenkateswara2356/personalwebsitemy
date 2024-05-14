import React from "react";
import { Col, Row } from "react-bootstrap";
import { FaPython } from "react-icons/fa";
import { DiHtml5 } from "react-icons/di";
import { SiSqlite } from "react-icons/si";
import { DiDjango } from "react-icons/di";
import { DiBootstrap } from "react-icons/di";
import { DiCss3 } from "react-icons/di";
import { FaReact } from "react-icons/fa";

import {
  DiJavascript1,
  DiReact,
  DiNodejs,
  DiMongodb,
  DiPython,
  DiGit,
  DiJava,
} from "react-icons/di";
import {
  SiRedis,
  SiFirebase,
  SiNextdotjs,
  SiSolidity,
  SiPostgresql,
} from "react-icons/si";
import { TbBrandGolang } from "react-icons/tb";

function Techstack() {
  return (
    <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
      <Col xs={4} md={2} className="tech-icons">
        <p className="Fonticn">Python</p>
      <FaPython />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
      <p className="Fonticn">Javascript</p>
        <DiJavascript1 />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
      <p className="Fonticn">React.js</p>
      <FaReact />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
      <p className="Fonticn">Node.js</p>
        <DiNodejs />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
      <p className="Fonticn">HTML</p>
      <DiHtml5 />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
      <p className="Fonticn">CSS</p>
      <DiCss3 />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
      <p className="Fonticn">Mongodb</p>
        <DiMongodb />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
      <p className="Fonticn">Next</p>
        <SiNextdotjs />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
      <p className="Fonticn">Git</p>
        <DiGit />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
      <p className="Fonticn">Firebase</p>
        <SiFirebase />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
      <p className="Fonticn">Bootstrap</p>
      <DiBootstrap />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
      <p className="Fonticn">Django</p>
      <DiDjango />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
      <p className="Fonticn">SQLITE</p>
      <SiSqlite />
      </Col>
      
    </Row>
  );
}

export default Techstack;