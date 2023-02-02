import React from "react";
import { Link } from "react-router-dom";
function NavBar() {
  return (
    <div>
      <Link to="/services">All services</Link>
      <Link to="/publish_services">Publish your service</Link>
    </div>
  );
}

export default NavBar;
