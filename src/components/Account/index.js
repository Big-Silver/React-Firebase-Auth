import React from "react";
import { AuthUserContext, withAuthorization } from "../Session";
import { PasswordForgetForm } from "../PasswordForget";
import { PasswordChangeForm } from "../PasswordChange";

const AccountPage = () => (
  <AuthUserContext.Consumer>
    {authUser => (
      <div className="auth-wrapper">
        <div className="auth-inner">
          <h1>Account: {authUser.email}</h1>
          {/* <PasswordForgetForm /> */}
          <PasswordChangeForm />
        </div>
      </div>
    )}
  </AuthUserContext.Consumer>
);
const condition = authUser => !!authUser;

export default withAuthorization(condition)(AccountPage);
