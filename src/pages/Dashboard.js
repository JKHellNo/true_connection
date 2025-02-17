import React from 'react';
import Header from '../components/Header';

// Dynamically import all images from the img folder
const importAll = (r) => {
  return r.keys().map(r);
};

const images = importAll(require.context('../img', false, /\.(png|jpe?g|svg)$/));

const Dashboard = () => {
  return (
    <div>
      <Header />
      <div>
        {images.map((image, index) => (
          <img key={index} src={image} alt={`image-${index}`} style={{ width: 200, margin: 10 }} />
        ))}
      </div>
    </div>
  );
};

export default Dashboard;
