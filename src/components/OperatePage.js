import React from 'react';
import { Link } from 'react-router-dom';

const OperatePage  = () => (
  <div className="operate">
    <div>
      <Link to="/"><img className="icon logo" id="home" src="./images/Laethos112x191.gif" alt="Laethos Home" /></Link>
    </div>
    <div className="App">
      <h1 className="pageTitle">Operate</h1>
    </div>
  </div>
);

export default OperatePage;