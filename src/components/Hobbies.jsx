// import React from 'react';
// import { List, ListItem, ListItemText, Typography } from '@mui/material';
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import { faBook, faUtensils, faHiking, faCamera, faGardenRake } from '@fortawesome/free-solid-svg-icons';

// const Hobbies = () => {
//   const hobbiesList = [
//     { icon: <FontAwesomeIcon icon={faBook} />, text: 'Reading' },
//     { icon: <FontAwesomeIcon icon={faUtensils} />, text: 'Cooking' },
//     { icon: <FontAwesomeIcon icon={faGardenRake} />, text: 'Gardening' },
//     { icon: <FontAwesomeIcon icon={faHiking} />, text: 'Hiking' },
//     { icon: <FontAwesomeIcon icon={faCamera} />, text: 'Photography' },
//     // Add more hobbies as needed
//   ];

//   return (
//     <div>
//       <Typography variant="h5" component="h2" gutterBottom>
//         My Hobbies
//       </Typography>
//       <List>
//         {hobbiesList.map((hobby, index) => (
//           <ListItem key={index}>
//             <ListItemText primary={hobby.text} />
//             <div>{hobby.icon}</div>
//           </ListItem>
//         ))}
//       </List>
//     </div>
//   );
// };

// export default Hobbies;
import React from 'react';

const Hobbies = () => {
  const hobbiesList = [
    'Reading',
    'Cooking',
    'Gardening',
    'Hiking',
    'Photography',
    // Add more hobbies as needed
  ];

  return (
    <div>
      <h2>My Hobbies</h2>
      <ul>
        {hobbiesList.map((hobby, index) => (
          <li key={index}>{hobby}</li>
        ))}
      </ul>
    </div>
  );
};

export default Hobbies;
