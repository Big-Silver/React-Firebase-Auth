import React from "react";
import { withAuthorization } from "../Session";
const HomePage = () => (
  <div className="auth-content">
    <div className="container h-100">
      <div className="d-flex justify-content-center align-items-center flex-column h-100">
        <h1 className="text-white">Home Page</h1>
      </div>
    </div>
  </div>
);
const condition = (authUser) => !!authUser;
export default withAuthorization(condition)(HomePage);
