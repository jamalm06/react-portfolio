import React, { useState } from "react";
// import logo from './logo.svg';
import './App.css';
import Header from "./components/Header";
import AboutMe from "./components/pages/AboutMe";
import Contact from "./components/pages/ContactMe";
import Portfolio from "./components/pages/Portfolio";
import Resume from "./components/pages/Resume";
import Footer from "./components/Footer";
import 'bootstrap/dist/css/bootstrap.min.css'

function App() {
  const [renderedPage, setRenderedPage] = useState("AboutMe");

  const renderPage = () => {
    if (renderedPage === "AboutMe") {
      return <AboutMe />;
    }

    if (renderedPage === "Contact") {
      return <Contact />;
    }

    if (renderedPage === "Portfolio") {
      return <Portfolio />;
    }

    if (renderedPage === "Resume") {
      return <Resume />;
    }
  };

  const handlePageRender = (page) => setRenderedPage(page);

  return (
    <div class="page-data">
    <Header renderedPage={renderedPage} handlePageRender={handlePageRender} />
    {renderPage()}
    <Footer />
  </div>
  );
}

export default App;
