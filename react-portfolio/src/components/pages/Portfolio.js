import React from "react";
import Projects from "../Projects";
import { Container, Row } from "react-bootstrap";

function Portfolio() {
  const projects = [
    {
      title: "BreakMyIntake",
      website: "https://evening-journey-80732.herokuapp.com",
    //   image: "",
      description:
        "A website to check BMI and track Calorie intake",
      altText: "BreakMyIntake",
      githubRepo: "https://github.com/Hflora2010/Break-My-Intake",
    },
    {
      title: "WhatRightNow",
      website: "https://meetsudarshan.github.io/WhatRightNow/",
    //   image: "",
      description:
        "check weather in desired location and suggestions for good places to eat out",
      altText: "What Right Now",
      githubRepo: "https://github.com/meetsudarshan/WhatRightNow",
    },
    // {
    //   title: "",
    //   website: "",
    // //   image: "./images/",
    //   description:
    //     "",
    //   altText: "",
    //   githubRepo: "",
    // },
    // {
    //   title: "",
    //   website: "",
    //   image: "",
    //   description: "",
    //   altText: "",
    //   githubRepo: "",
    // },
    // {
    //   title: "",
    //   website: "",
    //   image: "",
    //   description:
    //     "",
    //   altText: "",
    //   githubRepo: "",
    // },
    // {
    //   title: "",
    //   website: "",
    //   image: "",
    //   description:
    //     "",
    //   altText: "",
    //   githubRepo: "",
    // },
  ];

  return (
    <Container>
      <Row>
        {projects.map((project) => (
          <Projects data={project} />
        ))}
      </Row>
    </Container>
  );
}

export default Portfolio;