import React from "react";
import { Button } from "react-bootstrap";
const Logout = () => {
  function handleLogout() {
    window.localStorage.removeItem("user");
    sessionStorage.removeItem("user");
    window.location.reload();
  }

  return (
    <div>
      <Button variant="info" onClick={handleLogout}>
        LOGOUT
      </Button>
    </div>
  );
};

export default Logout;
