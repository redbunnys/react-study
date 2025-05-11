import React from 'react';
import { useNavigate } from 'react-router-dom';
const About: React.FC = () => {
  const navigate = useNavigate();
  return (
    <div>
      <h2>About Page</h2>
      <button onClick={() => navigate('/')}>Go to Home (Programmatic)</button>
    </div>
  );
};
export default About;