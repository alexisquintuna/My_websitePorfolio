import "./projects.css";
import Meetups from "../../images/GenereMeetups.png";
import Site from "../../images/GenereSite.png";
import Meals from "../../images/YuriMeals.png";

const data = [
  {
    id: 1,
    image: Meetups,
    title: "Genere Natus Meetup Locations",
    github: "https://github.com",
    live: "https://dribble.com",
  },
  {
    id: 2,
    image: Site,
    title: "Genere Natus Site",
    github: "https://github.com",
    live: "https://dribble.com",
  },
  {
    id: 3,
    image: Meals,
    title: "Food Ordering App",
    github: "https://github.com",
    live: "https://dribble.com",
  },
];

const Project = () => {
  return (
    <section id="Projects">
      <h5>My Recent Work</h5>
      <h2>Portfolio</h2>

      <div className="container project__container">
        {data.map(({ id, image, title, github, live }) => {
          return (
            <article key={id} className="project__item">
              <div className="project__item-image">
                <img src={image} alt={title} />
              </div>
              <h3>{title}</h3>
              <div className="project__item-cta">
                <a href={github} className="btn " target="_blank">Github</a>
                <a href={live} className="btn btn-primary" target="_blank">Live Server</a>
              </div>
            </article>
          );
        })}
      </div>
    </section>
  );
};

export default Project;
