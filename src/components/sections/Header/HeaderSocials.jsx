import {BsLinkedin} from "react-icons/bs"
import {BsGithub} from "react-icons/bs"
import {FiCodepen} from "react-icons/fi"
import {FiDribbble} from "react-icons/fi"

const Socials = () => {
    return (
        <div className="header__socials">
            <a href="https://dribbble.com/AlexisQuintuna" target="_blank" rel="noreferrer"><FiDribbble /></a>
            <a href="https://codepen.io/alexisquintuna" target="_blank" rel="noreferrer"><FiCodepen /></a>
            <a href="https://linkedin.com/in/alexis-quintuna" target="_blank" rel="noreferrer"><BsLinkedin /></a>
            <a href="https://github.com/alexisquintuna" target="_blank" rel="noreferrer"><BsGithub /></a>
        </div>
        )
}


export default Socials;