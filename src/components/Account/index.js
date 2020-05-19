import React from "react";
import { AuthUserContext, withAuthorization } from "../Session";
import { PasswordChangeForm } from "../PasswordChange";

function AccountPage() {
  return (
    <AuthUserContext.Consumer>
      {(authUser) => (
        <div className="auth-content">
          <div className="auth-wrapper">
            <div className="auth-inner">
              <h1>Account: {authUser.email}</h1>
              <PasswordChangeForm />
            </div>
          </div>
        </div>
      )}
    </AuthUserContext.Consumer>
  );
}

const condition = (authUser) => !!authUser;

export default withAuthorization(condition)(AccountPage);
