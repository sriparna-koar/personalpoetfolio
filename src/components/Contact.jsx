import React from 'react';
import NavigationBar from './NavigationBar';
import Footer from './Footer';
const Contact = () => {
  const name = 'Sriparna Koar';
  const email = 'koarsk03@gmail.com';
  const phone = '6290596740';

  const contactStyle = {
    maxWidth: '600px',
    margin: '0 auto',
    padding: '40px',
    borderRadius: '8px',
    boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
    // backgroundColor: '#f8f8f8',
    fontFamily: 'Arial, sans-serif'
  };

  const headingStyle = {
    fontSize: '28px',
    marginBottom: '20px',
    color:'rgba(255, 255, 255, 0.87)'
  };

  const paragraphStyle = {
    fontSize: '18px',
    marginBottom: '30px',
    color:'rgba(255, 255, 255, 0.87)'
  };

  const listStyle = {
    listStyle: 'none',
    padding: '0'
  };

  const listItemStyle = {
    fontSize: '18px',
    marginBottom: '15px',
    color:'rgba(255, 255, 255, 0.87)'
  };

  const linkStyle = {
    color: '023047',
    textDecoration: 'none',
    transition: 'color 0.3s ease-in-out'
  };

  const linkHoverStyle = {
    color: '#0056b3',
    textDecoration: 'underline'
  };

  return (
    <div style={contactStyle}>
      
       <NavigationBar />
      <h1>Contact Me</h1>
      <p style={paragraphStyle}>Feel free to reach out to me through the following channels:</p>
      <ul style={listStyle}>
        <li style={listItemStyle}>Name: {name}</li>
        <li style={listItemStyle}>Email: <a href={`mailto:${email}`} style={linkStyle}>{email}</a></li>
        <li style={listItemStyle}>Phone: <a href={`tel:${phone}`} style={linkStyle}>{phone}</a></li>
        
      </ul>
      <Footer/>
      
    </div>
  );
};

export default Contact;
