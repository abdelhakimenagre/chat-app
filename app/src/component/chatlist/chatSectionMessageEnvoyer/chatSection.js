import React from 'react';
import './chatSection.css'




const MessageComponent = (props) => {
  return (
    
     <div className="email-container">
      <div className="email-header">
        <h2 className="email-name">{props.name}</h2>
        <p className="email-address">{props.email}</p>
        <p className="email-timestamp">{props.name} {props.time} PDT</p>
      </div>

      <div className="email-section">
        <h3 className="email-greeting">{props.sujet}</h3>
        <p className="email-body">
          {props.content}
        </p>
        <div className="email-attachment">
         {props.attachement}
        </div>
      </div>
    </div>
  );
};

export default MessageComponent;