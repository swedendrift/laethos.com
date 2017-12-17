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

export default connect(mapStateToProps)(TitleText);
