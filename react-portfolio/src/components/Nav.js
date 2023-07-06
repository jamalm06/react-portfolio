import React from "react";

function NavBar({ renderedPage, handlePageRender }) {
  return (
    <nav className="links">
      <a
        href="#about-me"
        className={
          renderedPage === "AboutMe" ? "rendered-page" : "section-links"
        }
        onClick={() => handlePageRender("AboutMe")}
      >
        About Me
      </a>
      <a
        href="#portfolio"
        className={
          renderedPage === "Portfolio" ? "rendered-page" : "section-links"
        }
        onClick={() => handlePageRender("Portfolio")}
      >
        Portfolio
      </a>
      <a
        href="#contact"
        className={
          renderedPage === "Contact" ? "rendered-page" : "section-links"
        }
        onClick={() => handlePageRender("Contact")}
      >
        Contact
      </a>
      <a
        href="#resume"
        className={
          renderedPage === "Resume" ? "rendered-page" : "section-links"
        }
        onClick={() => handlePageRender("Resume")}
      >
        Resume
      </a>
    </nav>
  );
}

export default NavBar;