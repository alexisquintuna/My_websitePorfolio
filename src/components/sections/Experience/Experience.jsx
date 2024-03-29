import React from "react";
import "./experience.css";
import { AiFillCaretRight} from "react-icons/ai";

const Experience = () => {
  return (
    <section id="Experience">
      <h5>What Skills I have</h5>
      <h2>My Experience</h2>

      <div className="container experience__container">
        <div className="experience__frontend">
          <h3>FrontEnd Development</h3>
          <div className="experience__content">
            <article className="experience__details">
              <AiFillCaretRight className="experience__details-icons" />
              <div>
                <h4>HTML/CSS</h4>
                <small>Experienced</small>
              </div>
            </article>
            <article className="experience__details">
              <AiFillCaretRight className="experience__details-icons" />
              <div>
                <h4>WordPress/SquareSpace</h4>
                <small>Experienced</small>
              </div>
            </article>
            <article className="experience__details">
              <AiFillCaretRight className="experience__details-icons" />
              <div>
                <h4>M.E.R.N.</h4>
                <small>Experienced</small>
              </div>
            </article>
            <article className="experience__details">
              <AiFillCaretRight className="experience__details-icons" />
              <div>
                <h4>Vue.js</h4>
                <small>Experienced</small>
              </div>
            </article>
          </div>
        </div>

        <div className="experience__backend">
          <h3>BackEnd/Database Development</h3>
          <div className="experience__content">
            <article className="experience__details">
              <AiFillCaretRight className="experience__details-icons" />
              <div>
              <h4>C#</h4>
              <small>Experienced</small>
              </div>
            </article>
            <article className="experience__details">
              <AiFillCaretRight className="experience__details-icons" />
              <div>
              <h4>SQL</h4>
              <small>Experienced</small>
              </div>
            </article>
            <article className="experience__details">
              <AiFillCaretRight className="experience__details-icons" />
              <div>
              <h4>Python</h4>
              <small>Experienced</small>
              </div>
            </article>
            <article className="experience__details">
              <AiFillCaretRight className="experience__details-icons" />
              <div>
              <h4>FireBase</h4>
              <small>Experienced</small>
              </div>
            </article>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
