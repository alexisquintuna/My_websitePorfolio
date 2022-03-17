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
                <h4>HTML</h4>
                <small>Experienced</small>
              </div>
            </article>
            <article className="experience__details">
              <AiFillCaretRight className="experience__details-icons" />
              <div>
                <h4>CSS</h4>
                <small>Experienced</small>
              </div>
            </article>
            <article className="experience__details">
              <AiFillCaretRight className="experience__details-icons" />
              <div>
                <h4>JavaScript</h4>
                <small>Experienced</small>
              </div>
            </article>
            <article className="experience__details">
              <AiFillCaretRight className="experience__details-icons" />
              <div>
                <h4>ReactJS / NodeJS</h4>
                <small>Experienced</small>
              </div>
            </article>
          </div>
        </div>

        <div className="experience__backend">
          <h3>BackEnd Development</h3>
          <div className="experience__content">
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
              <h4>Django</h4>
              <small>Experienced</small>
              </div>
            </article>
            <article className="experience__details">
              <AiFillCaretRight className="experience__details-icons" />
              <div>
              <h4>MongoDB</h4>
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
