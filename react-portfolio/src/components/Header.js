import React from "react";
import Navigation from "./Nav";

function Header(props) {
  return (
    <header>
      <div className="header-name">
        <h1>Muhammad Jamal</h1>
      </div>
      <Navigation
        renderedPage={props.renderedPage}
        handlePageRender={props.handlePageRender}
      />
    </header>
  );
}

export default Header;