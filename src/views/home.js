import React from "react";
import { useStore } from "../store/store";
import Login from "../components/login/login";
import { Link } from "react-router-dom";

function Home() {
  const user = useStore((state) => state.user);
  return (
    <div className="home">
      <br></br>
      <h2>You can do whatever you put your mind to!</h2>
      {!user.token && (
        <div>
          <Login />{" "}
          <h2>
            Not a member? <Link to="/registration">Register Here!</Link> ^_^
          </h2>{" "}
        </div>
      )}
    </div>
  );
}

export default Home;
