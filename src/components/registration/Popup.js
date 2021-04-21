import React from "react";
import { Link } from "react-router-dom";
import "./popup.css";

const Popup = (props) => {
  return props.trigger ? (
    <div className="popup">
      <div className="popup-inner">
        Thank you for using You Can Dos! We hope you enjoy our app. Click the button below to start doing your You Can Dos.
        <br />
        <button className="close-button" onClick={() => props.setTrigger(false)}>
          <Link to="/">Click here to login</Link>
        </button>
        {props.children}
      </div>
    </div>
  ) : (
    ""
  );
};

export default Popup;
