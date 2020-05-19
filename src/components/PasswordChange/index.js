import React, { useState } from "react";
import { withRouter } from "react-router-dom";
import { compose } from "recompose";
import { withFirebase } from "../Firebase";

function PasswordChangePage() {
  return (
    <div className="auth-wrapper">
      <div className="auth-inner">
        <h1>Password Change</h1>
        <PasswordChangeForm />
      </div>
    </div>
  );
}

function PasswordChangeFormBase(props) {
  const [passwordOne, setPasswordOne] = useState("");
  const [passwordTwo, setPasswordTwo] = useState("");
  const [error, setError] = useState(null);

  function onSubmit(event) {
    props.firebase
      .doPasswordUpdate(passwordOne)
      .then(() => {
        setPasswordOne("");
        setPasswordTwo("");
        setError(null);
      })
      .catch((error) => {
        setError(error);
      });
    event.preventDefault();
  }

  function onChange(event) {
    switch (event.target.name) {
      case "passwordOne":
        setPasswordOne(event.target.value);
        break;
      case "passwordTwo":
        setPasswordTwo(event.target.value);
        break;
      default:
        return;
    }
  }

  function isInvalid() {
    return passwordOne !== passwordTwo || passwordOne === "";
  }

  return (
    <form onSubmit={onSubmit}>
      <div className="form-group">
        <label>New Password</label>
        <input
          name="passwordOne"
          value={passwordOne}
          onChange={onChange}
          type="password"
          className="form-control"
          placeholder="New Password"
        />
      </div>
      <div className="form-group">
        <label>Confirm New Password</label>
        <input
          name="passwordTwo"
          value={passwordTwo}
          onChange={onChange}
          type="password"
          className="form-control"
          placeholder="Confirm New Password"
        />
      </div>

      <button
        disabled={isInvalid}
        type="submit"
        className="btn btn-primary btn-block"
      >
        Reset My Password
      </button>
      {error && <p>{error.message}</p>}
    </form>
  );
}

const PasswordChangeForm = compose(
  withRouter,
  withFirebase
)(PasswordChangeFormBase);
export default PasswordChangePage;
export { PasswordChangeForm };
