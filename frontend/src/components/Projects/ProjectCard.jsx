import React from "react";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import { CgWebsite } from "react-icons/cg";
import { BsGithub } from "react-icons/bs";
import './ProjectCard.css'

const ProjectCard = (props) => {
  const {images,name,description,technologiesUsed,deploymentLink,repoLink} = props.projectDetails
  return (
    <Card className="project-card-view">
      <Card.Img variant="top" src={images[0]} alt="card-img" />
      <Card.Body>
        <Card.Title>{name}</Card.Title>
        <Card.Text style={{ textAlign: "justify" }}>
          {description}
        </Card.Text>
        <div className="techstack-bar">
        {technologiesUsed?.map((e,i)=>(
          <Button variant="primary">
                {e}
             </Button>
        ))}
        </div>

        <Button variant="warning" href={repoLink} target="_blank">
          <BsGithub /> &nbsp;
          Github
        </Button>
        {"\n"}
        {"\n"}

          <Button
            variant="warning"
            href={deploymentLink}
            target="_blank"
            style={{ marginLeft: "10px" }}
          >
            <CgWebsite /> &nbsp;
            {"Demo"}
          </Button>
      </Card.Body>
    </Card>
  );
}
export default ProjectCard;
