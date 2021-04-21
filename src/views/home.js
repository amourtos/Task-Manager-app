import React from "react";
import { useStore } from "../store/store";
import Login from "../login/login";
import Registration from "../registration/registration";

function Home() {
  const user = useStore((state) => state.user);
  return (
    <div className="home">
      <br></br>
      <h2>You can do whatever you put your mind to!</h2>
      {!user.token && (
        <div>
          <Login /> <h2>Not a member? Register below ^_^</h2> <Registration />
        </div>
      )}
    </div>
  );
}

export default Home;
