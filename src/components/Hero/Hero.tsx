import "./Hero.css";

import photo from "../../images/hero.png";
import telegram from "../../images/telegram.png";
import github from "../../images/github.png";

function Hero() {
  return (
    <section className="hero">
      <div className="hero__info">
        <p className="hero__before-name">my name is</p>
        <h1 className="hero__name">
          Pavel <span className="hero__second-name">Melekhin</span>
        </h1>
        <p className="hero__description">
          I am a frontend developer. I am excited about the development process and the opportunity to create new
          interesting projects, as well as solve complex problems. Previously, I led a team and created medical devices,
          now I apply this experience on the web.
        </p>
        <nav>
          <ul className="hero__skills">
            <li>
              <a href="https://t.me/ElvenSky" rel="noreferrer" target="_blank">
                <img className="hero__skill" src={telegram} alt="Telegram" />
              </a>
            </li>
            <li>
              <a href="https://github.com/Pavelsmcom" rel="noreferrer" target="_blank">
                <img className="hero__skill" src={github} alt="GitHub" />
              </a>
            </li>
            {/* <li>
              <a
                href="https://www.codewars.com/users/ElvenSky"
                className="hero__skill-codewars"
                rel="noreferrer"
                target="_blank"
              >
                <img src="https://www.codewars.com/users/ElvenSky/badges/micro" alt="CodeWars" />
              </a>
            </li> */}
          </ul>
        </nav>
      </div>
      <img className="hero__photo" alt="Pavel Melekhin" src={photo} />
    </section>
  );
}

export default Hero;
