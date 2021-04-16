import React from "react";

const Logout = () => {
  function handleLogout() {
    window.localStorage.removeItem("user");
    sessionStorage.removeItem("user");
    window.location.reload();
  }

  return (
    <div>
      <button onClick={handleLogout}>LOGOUT</button>
    </div>
  );
};

export default Logout;
