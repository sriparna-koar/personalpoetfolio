import React from 'react';
import NavigationBar from './NavigationBar';
import Footer from './Footer';
const Education = () => {
 
  const qualifications = [
    {
      degree: 'Bachelor of Science in Computer Science',
      institution: 'University Name',
      location: 'City, Country',
      year: '2018 - 2022',
      description: 'Description or additional details (optional)',
    },
    {
      degree: 'Master of Business Administration',
      institution: 'Another University',
      location: 'Another City, Country',
      year: '2023 - Present',
      description: 'Additional degree or relevant education (optional)',
    },
    // Add more educational qualifications as needed
  ];

  return (
    <section className="education-section">
       <NavigationBar />
      <h1>Educational Qualifications</h1>
      <div className="qualifications-list">
        {qualifications.map((qualification, index) => (
          <div key={index} className="qualification-item">
            <h3>{qualification.degree}</h3>
            <p>{qualification.institution}</p>
            <p>{qualification.location}</p>
            <p>{qualification.year}</p>
            {qualification.description && <p>{qualification.description}</p>}
          </div>
        ))}
      </div>
      <Footer/>
      
    </section>
  );
};

export default Education;
