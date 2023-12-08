import React, { useEffect, useState } from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "../components/Projects/ProjectCard";
import Particle from "../components/Particle";

const Projects = () => {
  const [projects,setProjects]=useState([])
  useEffect(()=>{
    const fetchAllProjectsHandler = async()=>{
      const response = await fetch(`http://localhost:4000/project`)
      console.log(response);
      if(response.status===200){
        const data = await response.json()
        console.log(data);
        setProjects(data)
      }
    }
    fetchAllProjectsHandler()
  },[])
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          Recent Top <strong className="yellow">Works </strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are a few projects I've worked on recently.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          {projects?.map((e,i)=>(
          <Col md={4} className="project-card">
            <ProjectCard
            projectDetails = {e}
            />
          </Col>  
          ))}
        </Row>
      </Container>
    </Container>
  )
}

export default Projects