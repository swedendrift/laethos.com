import React from 'react';
import { connect } from 'react-redux';


const mapStateToProps = ({ titleText: title }) => ({ title });


const TitleText = ({ title }) => {
  return (
    <div className="titleText">
      {title}
    </div>
  );
};

module.exports = connect(mapStateToProps)(TitleText);

export default TitleText;