import { motion } from "framer-motion";

import TransitionEffect from "../TransitionEffect/TransitionEffect";

import "./Skills.css";

import html from "../../images/skills/html.png";
import css from "../../images/skills/css.png";
import bem from "../../images/skills/BEM.png";
import js from "../../images/skills/JS.png";
import ts from "../../images/skills/TS.png";
import react from "../../images/skills/react.png";
import mongoDB from "../../images/skills/mdb.png";
import node from "../../images/skills/Nodejs.png";
import c from "../../images/skills/c++.png";
import asm from "../../images/skills/asm.png";
import sass from "../../images/skills/sass.png";
import redux from "../../images/skills/redux.png";

const skills = [
  { title: "HTML", pic: html },
  { title: "CSS", pic: css },
  { title: "SCSS", pic: sass },
  { title: "BEM Methodology", pic: bem },
  { title: "JavaScript", pic: js },
  { title: "TypeScript", pic: ts },
  { title: "React", pic: react },
  { title: "Redux", pic: redux },
  { title: "MongoDB", pic: mongoDB },
  { title: "Node.js", pic: node },
  { title: "C++/C", pic: c },
  { title: "asm", pic: asm },
];

const skillVariants = {
  visible: (i: number) => ({
    opacity: 1,
    scale: 1,
    transition: { duration: 0.8, delay: 0.5 + i * 0.2 },
  }),
  invisible: {
    opacity: 0,
    scale: 0.2,
  },
};

const skillsLis = skills.map((skill, index) => (
  <motion.li
    variants={skillVariants}
    initial="invisible"
    animate="visible"
    custom={index}
    className="skills__item"
    key={index}
  >
    <figure className="skills__figure">
      <img className="skills__image " src={skill.pic} alt={skill.title} />
      <figcaption className="skills__title">{skill.title}</figcaption>
    </figure>
  </motion.li>
));

function Skills() {
  return (
    <>
      <TransitionEffect />
      <section className="skills">
        <p className="skills__pre-header">my experience</p>
        <h2 className="skills__header">My Skills</h2>
        <ul className="skills__collections">{skillsLis}</ul>
      </section>
    </>
  );
}

export default Skills;
