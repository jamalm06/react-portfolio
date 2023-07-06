import React from "react";
import Col from "react-bootstrap/Col";

function Projects(props) {
  return (
    <Col xs={12} md={6}>
      <div>
        <div
          className="card"
          style={{ width: "30rem", margin: "20px 0 50px 20px " }}
        >
          <img
            src={props.data.image}
            className="card-img-top"
            alt={props.data.altText}
            style={{ height: "290px" }}
          />
          <div className="card-body">
            <h5 className="card-title">{props.data.title}</h5>
            <p className="card-text">{props.data.description}</p>
            <a href={props.data.website} target="_blank" className="btn btn-secondary" >
              Check it out!
            </a>
            <a href={props.data.githubRepo} className="btn btn-secondary repo-link" target="_blank" >
              GitHub Repo
            </a>
          </div>
        </div>
      </div>
    </Col>
  );
}

export default Projects;