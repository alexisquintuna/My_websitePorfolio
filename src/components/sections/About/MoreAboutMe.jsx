import { Link } from "react-router-dom";
import Upclose from "../../images/upclose.png";
import Pouring from "../../images/pouring.png";
import Handing from "../../images/handing.png";
import Me from "../../images/Me.png";
import Pebbles from "../../images/Pebbles.png";
import Cars from "../../images/Cars.png";
import Dump from "../../images/Dump.mp4";
import "./moreabout.css";
import { IoIosArrowBack } from "react-icons/io";

const data = [
  { id: 1, image: Pouring },
  { id: 2, image: Upclose },
  { id: 3, image: Handing },
  { id: 4, image: Me },
  { id: 5, image: Cars },
  { id: 6, image: Pebbles },
];

const MoreAboutMe = () => {
  return (
    <section id="MoreAboutMe" className="MoreAboutMe">
      <div className="home">
        <Link to="/" onClick={() => window.scrollTo(0, 0)}>
          {" "}
          <IoIosArrowBack />
          Back Home
        </Link>
      </div>
      <h5>What else do I do?</h5>
      <h2>In Other News</h2>

      <div className="container moreabout__container">
        <div className="more__aboutme">
          <div className="more__aboutme-image">
            <video autoPlay loop muted src={Dump}></video>
          </div>
        </div>

        <div className="more__content">
          <p>
            When I'm not coding, I'm pouring milk into coffee! Working at a
            coffee shop is a passion of mine. I enjoy it and take pride in what
            I make/create with every cup of coffee. It's not only that but
            talking to the people that come into the shop too, making sure they
            get what they want and leave with a smile on their face, making sure
            their voice's heard. I currently work for a non-profit organization
            called{" "}
            <a href="https://www.rooseveltcoffee.org/justice/" target="_blank">
              The Roosevelt CoffeeHouse
            </a>{" "}
            , where we fight the injustice of
            the world with a cup of coffee. I'm always trying to learn or keep
            progressing no matter what role I'm playing; nothing is ever too big
            or small, always put my 110%. I'm also interested in
            music, dancing, fashion, and cars! I also have a cat named Pebbles
            who means the world to me.{" "}
          </p>
        </div>
      </div>
      <div className="container morepics__container">
        {data.map(({ id, image }) => {
          return (
            <div key={id} className="morepics__images">
              <img src={image} alt="barita things" />
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default MoreAboutMe;
