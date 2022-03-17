import React from "react";
import Header from "./components/sections/Header/Header";
import Nav from "./components/sections/Nav/Nav";
// import Homepage from "./components/sections/Homepage/homepage";
import About from "./components/sections/About/About";
import Experience from "./components/sections/Experience/Experience";
import Projects from "./components/sections/Projects/Project";
import Contact from "./components/sections/Contact/Contact";
import Footer from "./components/sections/Footer/Footer";

function App() {
  return (
    <>
      <Header />
      <Nav />
      {/* <Homepage /> */}
      <About />
      <Experience />
      <Projects />
      <Contact />
      <Footer />
    </>
  );
}

export default App;
