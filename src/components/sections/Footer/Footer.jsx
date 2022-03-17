import "./footer.css";
import { FaInstagram } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";

const Footer = () => {
  return (
    <footer>
      <a href="#" className="footer__logo">
        Alexis Quintuna | Quintuna Alexis
      </a>

      <ul className="permalinks">
        <li>
          <a href="#">Home</a>
        </li>
        <li>
          <a href="#About">About</a>
        </li>
        <li>
          <a href="#Experience">Experience</a>
        </li>
        <li>
          <a href="#Portfolio">Portfolio</a>
        </li>
        <li>
          <a href="#Contact">Contact</a>
        </li>
      </ul>

      <div className="footer__socials">
        <a href="https://instagram.com">
          <FaInstagram />
        </a>
        <a href="https://twitter.com">
          <FaTwitter />
        </a>
        <a href="https://linkedin.com">
          <FaLinkedin />
        </a>
      </div>

      <div className="footer__copyright">
          <small>&copy; Coded by Alexis Quintuna</small>
          <br/>
          <small>Created with lots of patience and love</small>
          </div>

    </footer>
  );
};

export default Footer;
