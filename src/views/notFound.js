import React from "react";
import { Link } from "react-router-dom";

import { Button } from "react-bootstrap";

function NotFound(props) {
  return (
    <div>
      <h1>ERROR PAGE 404</h1>
      <Button variant="info">
        <Link to="/" className="link">
          Back Home
        </Link>
      </Button>
    </div>
  );
}

export default NotFound;
