import React from "react";
import "./header.css";
import CTA from "./CTA";
import Me from "../../images/aboutme.png";
import Socials from "./HeaderSocials";

const Header = () => {
  return (
    <header>
      <div className="container header__container">
        <h5> Hello I'm</h5>
        <h1>Alexis Quintuña</h1>
        <h5 className="text-light">Full Stack Developer</h5>
        <CTA />
        <Socials />

        <div className="Me">
          <img src={Me} alt="Me" />
        </div>

        <a href="#Contact" className="scroll__down">
          Scroll Down
        </a>
      </div>
    </header>
  );
};

export default Header;
