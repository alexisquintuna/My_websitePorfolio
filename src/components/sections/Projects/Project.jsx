import "./projects.css";
import Meetups from "../../images/GenereMeetups.png";
import Site from "../../images/GenereSite.png";
import Meals from "../../images/YuriMeals.png";

const data = [
  {
    id: 1,
    image: Site,
    title: "Genere Natus Site",
    github: "https://github.com/alexisquintuna/midnight_club",
    live: "https://genere-natus.vercel.app/",
    // description: "Official Site for Genere Natus. A club for street racers to enjoy racing safely while doing hooligan stuff. ",
  },
  {
    id: 2,
    image: Meetups,
    title: "Genere Natus Meetup Locations",
    github: "https://github.com/alexisquintuna/GenereNatusMeetup/tree/main",
    live: "https://genere-natus-meetup.vercel.app/",
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
              <div className="project__item-image">
                {/* <p className="project__description">{description}</p> || New Update not sure how im going to make this work for now */}
                <img src={image} alt={title} />
              </div>
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
    </section>
  );
};

export default Project;
