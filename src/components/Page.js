import React from 'react';
import { Link } from 'react-router-dom';

const Page = (props) => {
  return (
    <div className="page">
      <Link to="/"><img className="icon" id="logo" src="./images/Laethos112x191.gif" alt="Laethos Home" /></Link>
    </div>
  );
};

export default Page;
