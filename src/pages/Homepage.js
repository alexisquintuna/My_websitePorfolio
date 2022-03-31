import Header from "../components/sections/Header/Header";
import Nav from "../components/sections/Nav/Nav";
import About from "../components/sections/About/About";
import Experience from "../components/sections/Experience/Experience";
import Projects from "../components/sections/Projects/Project";
import Contact from "../components/sections/Contact/Contact";

const Homepage = () => {
  return (
    <>
      <Header />
      <Nav />
      <About />
      <Experience />
      <Projects />
      <Contact />
    </>
  );
};

export default Homepage;
