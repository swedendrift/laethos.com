import React from 'react';
import { Link } from 'react-router';

const HomePage = () => {
  return (
    <div>
        <div id="logo-name">
          LÆTHOS
        </div>
        <div id="icons">
          <a href="/innovate"><img className="icon" id="innovate" src="./images/innovate.svg" alt="Innovate" /></a>
          <a href="/create"><img className="icon" id="create" src="./images/create.svg" alt="Create" /></a>
          <a href="/operate"><img className="icon" id="operate" src="./images/operate.svg" alt="Operate" /></a>
        </div>
    </div>
  );
};

export default HomePage;