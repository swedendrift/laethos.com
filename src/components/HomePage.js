import React from 'react';
import { changeTitle } from '../actions';
import { Link } from 'react-router-dom';
import { TitleText } from './TitleText';

const HomePage = () => {

  return (
    <div className="App">
        <div id="logo-name">
          LÆTHOS
        </div>
        <div>
          <TitleText />
        </div>
        <div id="icons">
          <Link to="/innovate"><img className="icon" id="innovate" src="./images/innovate.svg" alt="Innovate" /></Link>
          <Link to="/create"><img className="icon" id="create" src="./images/create.svg" alt="Create" /></Link>
          <Link to="/operate"><img className="icon" id="operate" src="./images/operate.svg" alt="Operate" /></Link>
        </div>
    </div>
  );
};

export default HomePage;