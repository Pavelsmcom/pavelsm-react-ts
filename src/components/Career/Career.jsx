import './Career.css';

import { motion } from 'framer-motion';

import { useState } from 'react';

const companies = [
  {
    name: 'Commercial project',
    post: 'Frontend developer',
    time: '2023 - Present',
    skills: ['HTML', 'CSS', 'SASS', 'BEM', 'JavaScript', 'React', 'StoryBook', 'Git'],
    text: ['Took part in the development of a platform for managing the hiring process - a CRM system for HR, wich simplifies and automates their work.'],
  },
  {
    name: 'Ya.Practicum',
    post: 'Frontend developer (student)',
    time: '2022 - 2023',
    skills: ['HTML', 'CSS', 'BEM', 'JavaScript', 'React', 'MongoDB', 'Node.js', 'Git'],
    text: [
      'I defended my diploma in Ya.Practicum with a degree in WEB development',
      'Participated in team projects. Learned html|css, principles of working with asynchronous code, React.js framework, worked with databases.',
      'Worked on the frontend and backend parts of several projects under the supervision of experienced mentors',
    ],
  },
  {
    name: 'Roscosmos',
    post: 'Lead electronics hardware engineer',
    time: '2011 - Present · Full-time',
    skills: ['C++', 'Asm'],
    text: [
      'I Developed software for microcontrollers in C++ and Asm. Conducted hundreds of code reviews',
      'I Developed 4 medical products for newborns, put them into production, which saved a many life and changed the world for the better',
      'Under my leadership, the development time has been reduced from 4 years to 2 years',
      'I successfully managed a team of 5 people for 6 years',
    ],
  },
];

function Career() {
  const [companyVisible, setCompanyVisible] = useState(0);

  const companyList = companies.map((company, index) => {
    return <Company name={company.name} index={index} key={index} />;
  });

  function Company({ name, index }) {
    return (
      <li
        className={companyVisible === index ? 'career__switch-cell career__switch-cell_active' : 'career__switch-cell'}
        onClick={() => setCompanyVisible(index)}
      >
        <p className={companyVisible === index ? 'career__switch-text career__switch-text_active' : 'career__switch-text'}>{name}</p>
        {companyVisible === index && <p className="career__switch-arrow">></p>}
      </li>
    );
  }

  const descriptionList = companies.map((company, index) => {
    return companyVisible === index ? (
      <motion.div
        initial={{ opacity: 0, scale: 0.2 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8 }}
        className="career__description"
        key={index}
      >
        <h3 className="career__company-header">{company.name}</h3>
        <p className="career__company-post-header">{company.post}</p>
        <div className="career__skills">
          {company.skills.map((skill, index) => {
            return (
              <span className="career__skill" key={index}>
                {skill}
              </span>
            );
          })}
        </div>
        {company.text.map((text, index) => {
          return (
            <p className="career__company-text" key={index}>
              {text}
            </p>
          );
        })}
      </motion.div>
    ) : null;
  });

  return (
    <>
      <section className="career">
        <p className="career__pre-header">Career path</p>
        <h2 className="career__header">Work Experiences</h2>
        <div className="career__container">
          <ul className="career__switcher">{companyList}</ul>
          {descriptionList}
        </div>
      </section>
    </>
  );
}

export default Career;
