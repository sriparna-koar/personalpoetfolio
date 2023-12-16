// import React from 'react';
// import NavigationBar from './NavigationBar';
// import Footer from './Footer';
// import './qualifications.css';
// const Education = () => {
 
//   const qualifications = [
//     {
//       degree: 'Bachelor of Science in Computer Science',
//       institution: 'University Name',
//       location: 'City, Country',
//       year: '2018 - 2022',
//       description: 'Description or additional details (optional)',
//     },
//     {
//       degree: 'Master of Business Administration',
//       institution: 'Another University',
//       location: 'Another City, Country',
//       year: '2023 - Present',
//       description: 'Additional degree or relevant education (optional)',
//     },

//   ];

//   return (
//     <section className="education-section">
//        <NavigationBar />
//       <h1>Educational Qualifications</h1>
//       <div className="qualifications-list">
//         {qualifications.map((qualification, index) => (
//           <div key={index} className="qualification-item">
//             <h3>{qualification.degree}</h3>
//             <p>{qualification.institution}</p>
//             <p>{qualification.location}</p>
//             <p>{qualification.year}</p>
//             {qualification.description && <p>{qualification.description}</p>}
//           </div>
//         ))}
//       </div>
//       <Footer/>
      
//     </section>
//   );
// };

// export default Education;
import React from 'react';
import NavigationBar from './NavigationBar';
import Footer from './Footer';
import './qualifications.css';

const Education = () => {
  const qualifications = [
    {
      degree: 'Bachelor of Science in Computer Science',
      institution: 'Techno India University',
      location: 'West Bengal,Kolkata',
      year: '2022 - 2026',
      description: 'Persuing Btech CSE_AI from TIU ',
    },
    {
      degree: 'Higher Secondary',
      School: 'Delhi Public School,Ruby Park',
      location: 'West Bengal, Kolkata',
      year: '2020 - 2022',
      description: 'Persued class 12 from DPS,Ruby Park with core subjects Math,Physics,Chemistry,Computer Science',
    },
  ];

  return (
    <section className="education-section">
      <NavigationBar />
      <h1 className="education-heading">Educational Qualifications</h1>
      <div className="qualifications-list">
        {qualifications.map((qualification, index) => (
          <div key={index} className="qualification-item">
            <h3 className="degree">{qualification.degree}</h3>
            <p className="institution">{qualification.institution}</p>
            <p className="location">{qualification.location}</p>
            <p className="year">{qualification.year}</p>
            {qualification.description && <p className="description">{qualification.description}</p>}
          </div>
        ))}
      </div>
      <Footer />
    </section>
  );
};

export default Education;
