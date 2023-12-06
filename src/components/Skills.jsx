
import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCode, faDatabase, faChartBar, faDesktop } from '@fortawesome/free-solid-svg-icons';

const Skills = () => {
 
  const skills = [
    { name: 'Web Development', icon: faCode, level: 90 }, // Change levels as needed
    // { name: 'Database Management', icon: faDatabase, level: 80 },
    { name: 'Data Analysis', icon: faChartBar, level: 75 },
    { name: 'UI/UX Design', icon: faDesktop, level: 85 },
    // Add more skills as necessary
  ];

  return (
    <section className="skills-section">
      <h1>Skills</h1>
      <div className="skills-list">
        {skills.map((skill, index) => (
          <div key={index} className="skill-item">
            <FontAwesomeIcon icon={skill.icon} className="skill-icon" />
            <span className="skill-name">{skill.name}</span>
            <div className="progress">
              <div
                className="progress-bar"
                role="progressbar"
                style={{ width: `${skill.level}%` }}
                aria-valuenow={skill.level}
                aria-valuemin="0"
                aria-valuemax="100"
              ></div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Skills;
