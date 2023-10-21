import "./Portfolio.css";

import { motion } from "framer-motion";

import mesto from "../../images/portfolio/mesto.jpg";
import hotel from "../../images/portfolio/hotelbooking.jpg";
import kino from "../../images/portfolio/kino.jpg";
import travel from "../../images/portfolio/travel.jpg";
import howtolearn from "../../images/portfolio/howtolearn.jpg";
import crm from "../../images/portfolio/crm.jpg";

import TransitionEffect from "../TransitionEffect/TransitionEffect";

const works = [
  { pic: crm, link: "" },
  { pic: kino, link: "https://movies-explorer.pavelsm.nomoredomains.monster/" },
  { pic: mesto, link: "https://pavelsmcom.github.io/mesto/" },
  { pic: travel, link: "https://pavelsmcom.github.io/russian-travel/" },
  { pic: howtolearn, link: "https://pavelsm.com/how-to-learn/index.html" },
  { pic: hotel, link: "https://pavelsmcom.github.io/HotelBooking/" },
];

const cardVariants = {
  offscreen: {
    y: 500,
    opacity: 0,
  },
  onscreen: {
    y: 0,
    opacity: 1,
    transition: {
      type: "spring",
      bounce: 0.25,
      duration: 0.8,
    },
  },
};

interface CardProps {
  work: {
    pic: string;
    link: string;
  };
}

function Card({ work }: CardProps) {
  return (
    <motion.li
      className="portfolio__work"
      initial="offscreen"
      whileInView="onscreen"
      viewport={{ once: true, amount: 0.8 }}
    >
      <motion.div variants={cardVariants}>
        {work.link === "" ? (
          <img src={work.pic} alt="portfolio work" />
        ) : (
          <a href={work.link} target="_blank" rel="noreferrer">
            <img src={work.pic} alt="portfolio work" />
          </a>
        )}
      </motion.div>
    </motion.li>
  );
}

function Portfolio() {
  return (
    <>
      <TransitionEffect />
      <section className="portfolio">
        <p className="portfolio__pre-header">my works</p>
        <h2 className="portfolio__text">Portfolio</h2>
        <ul className="portfolio__works">
          {works.map((work, index) => (
            <Card work={work} key={index} />
          ))}
        </ul>
      </section>
    </>
  );
}

export default Portfolio;
