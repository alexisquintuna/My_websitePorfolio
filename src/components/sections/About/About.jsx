import { Link } from "react-router-dom";
import "./about.css";
import Me from "../../images/memoji.png";
import { FaAward } from "react-icons/fa";
import { FiCoffee } from "react-icons/fi";
import { VscFolderLibrary } from "react-icons/vsc";

const About = () => {
  return (
    <section id="About">
      <h5>Get To Know Me</h5>
      <h2>About Me</h2>

      <div className="container about__container">
        <div className="about__me">
          <div className="about__me-image">
            <img src={Me} alt="Me" />
          </div>
        </div>

        <div className="about__content">
          <div className="about__cards">
            <article className="about__card">
              <FaAward className="about__icon" />
              <h5>Experience</h5>
              <small>1+ Years Working</small>
            </article>

            <article className="about__card">
              <FiCoffee className="about__icon" />
              <h5>
                <Link to="/MoreAboutMe" onClick={() => window.scrollTo(0, 0)}>Coffee Cups Made</Link>
              </h5>
              <small>100,000+</small>
            </article>

            <article className="about__card">
              <VscFolderLibrary className="about__icon" />
              <h5>Projects</h5>
              <small>10+ Projects Completed</small>
            </article>
          </div>

          <p>
            Como estamos, How we doing, My name is Alexis Quintuña and I'm a
            self taught motivated developer with a hunger to learn and keep
            growing everyday. Creativity and simplicity is what I aim to create,
            keeping the people engaged and inspired is my goal. Bringing those
            ideas of yours to life is what im here for.
            <br /> <br />
            I dont like to define myself for the work I've done because everyday
            something new can be learned, but I rather be defined by the work I
            want to do. I prefer to keep learning and challenging myself to do
            more.
            <br />
            <br />
            I'm a fast learner, able to pick up new skills and juggle different
            projects and roles with relative ease.
          </p>

          <a href="#Contact" className="btn btn-primary">
            {" "}
            Let's Talk
          </a>
        </div>
      </div>
    </section>
  );
};

export default About;
