import React from "react";
import { getTime } from "../../function/timeFunction";
 const Chatbox = (props) => {
  return (
    <div className="email-container">
      <div
        className={`email-section ${
          props.activeChat === props.name ? "left" : "right"
        } `}
      >
        <p className="email-body">{props.content}</p>
        {props.attachement && (
          <div className="email-attachment">{props.attachement}</div>
        )}
        <p className="email-timestamp">{getTime(props.time)} GMT</p>
      </div>
    </div>
  );
};
export default Chatbox;