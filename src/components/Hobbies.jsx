
import React from 'react';
import Footer from './Footer';
import NavigationBar from './NavigationBar';
const Hobbies = () => {
  const hobbiesList = [
    'Reading',
    'Cooking',
    'Gardening',
    'Hiking',
    'Photography',
  
  ];

  return (
    <div>
      <h2>My Hobbies</h2>
      <NavigationBar />
      <ul>
        
        {hobbiesList.map((hobby, index) => (
          <li key={index}>{hobby}</li>
        ))}
        
      </ul>
      <Footer/>
    </div>
  );
};

export default Hobbies;
