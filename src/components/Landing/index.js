import React from "react";
import { noneAuthorization } from "../Session";

function Landing() {
  return (
    <div className="hero-container">
      <h1>React + Firebase</h1>
      <h2>React Firebase Tutorial</h2>
      <a href="/signin" className="btn-get-started scrollto">
        Get Started
      </a>
    </div>
  );
}

const condition = (authUser) => !!authUser;
export default noneAuthorization(condition)(Landing);
