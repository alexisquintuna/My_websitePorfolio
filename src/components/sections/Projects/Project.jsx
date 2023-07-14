import "./projects.css";
import LoopStudios from "../../images/LoopStudios.png";
import Site from "../../images/GenereNatus2.png";
import Meals from "../../images/YuriMeals.png";
import CatCrack from "../../images/CatCrackCover.png";

const data = [
  {
    id: 1,
    image: CatCrack,
    title: "Cat Crack",
    github: "https://github.com/alexisquintuna/CatCrackJavascriptAnimations",
    live: "https://catcrack.com/",
    // description: "Official Site for Genere Natus. A club for street racers to enjoy racing safely while doing hooligan stuff. ",
  },
  {
    id: 2,
    image: LoopStudios,
    title: "LoopStudios Landing Page",
    github: "https://github.com/alexisquintuna/loopstudios",
    live: "https://stately-crisp-b6c745.netlify.app/",
    // description: "A site where the locations for the car meets will be held at. Three different locations for the night, and one can also put in other secure locations.",
  },
  {
    id: 3,
    image: Meals,
    title: "Food Ordering App",
    github: "https://github.com/alexisquintuna/FoodApp",
    live: "https://food-app-rust.vercel.app/",
    // description: "A food ordering app. Where the customer submits an order and it gets sent to a firebase database where the order and customers information is stored in.",
  },
  {
    id: 4,
    image: Site,
    title: "Genere Natus Site 2.0",
    github: "https://github.com/alexisquintuna/Genere2.0",
    live: "https://generenatus2-0.vercel.app/",
  }
];

const Project = () => {
  return (
    <section id="Projects">
      <h5>My Recent Work</h5>
      <h2>Portfolio</h2>

      <div className="container project__container">
        {data.map(({ id, image, title, github, live /* description */ }) => {
          return (
            <article key={id} className="project__item">
              <a target="_blank" href={live} className="project__item-image">
                {/* <p className="project__description">{description}</p> || New Update not sure how im going to make this work for now */}
                <img src={image} alt={title} />
              </a>
              <h3>{title}</h3>
              <div className="project__item-cta">
                <a href={github} className="btn " target="_blank">
                  Github
                </a>
                <a href={live} className="btn btn-primary" target="_blank">
                  Live Server
                </a>
              </div>
            </article>
          );
        })}
      </div>
      <div className="side__projects">
        <a href="https://codepen.io/alexisquintuna" target="_blank">For Fun Side Projects</a>
      </div>
    </section>
  );
};

export default Project;
