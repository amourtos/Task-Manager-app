import React, { useStore } from "react";

import Login from "../login/login";
import Registration from "../registration/registration";

function Home(props) {
  const user = useStore((state) => state.user);
  return (
    <div className="home">
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
