import useBreakpoint from "antd/lib/grid/hooks/useBreakpoint";
import React from "react";
import { Link } from "react-router-dom";
import "./Popup.css";

const Popup = (props) => {
  return props.trigger ? (
    <div className="popup">
      <div className="popup-inner">
        Thank you for using You Can Dos! We hope you enjoy our app. Click the button below to start doing your You Can Dos.
        <br />
        <button className="close-button" onClick={() => props.setTrigger(false)}>
          <Link to="/">Go home</Link>
        </button>
        {props.children}
      </div>
    </div>
  ) : (
    ""
  );
};

export default Popup;
