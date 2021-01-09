import React from "react";

import "./err-message.styles.scss";

const ErrMessage = ({err}) => {
  if(err) {
    return (
      <div className="err__message">
        <p className="message">{err.message}</p>
      </div>  
    ) 
  } else {
    return null;
  }
};

export default ErrMessage;