import React, { useState } from "react";
import { Link } from "react-router-dom";
import { withFirebase } from "../Firebase";
import { noneAuthorization } from "../Session";
import * as ROUTES from "../../constants/routes";
function PasswordForgetPage() {
  return (
    <div className="auth-wrapper">
      <div className="auth-inner">
        <h1>PasswordForget</h1>
        <PasswordForgetForm />
      </div>
    </div>
  );
}

function PasswordForgetFormBase(props) {
  const [email, setEmail] = useState("");
  const [error, setError] = useState(null);

  function onSubmit(event) {
    props.firebase
      .doPasswordReset(email)
      .then(() => {
        setEmail("");
        setError(null);
      })
      .catch((error) => {
        setError(error);
      });
    event.preventDefault();
  }

  function onChange(event) {
    switch (event.target.name) {
      case "email":
        setEmail(event.target.value);
        break;
      default:
        return;
    }
  }

  function isInvalid() {
    return email === "";
  }

  return (
    <form onSubmit={onSubmit}>
      <div className="form-group">
        <label>Email address</label>
        <input
          name="email"
          value={email}
          onChange={onChange}
          type="email"
          className="form-control"
          placeholder="Email Address"
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

function PasswordForgetLink() {
  return (
    <p className="forgot-password text-right">
      <Link to={ROUTES.PASSWORD_FORGET}>Forgot Password?</Link>
    </p>
  );
}

const condition = (authUser) => !!authUser;
export default noneAuthorization(condition)(PasswordForgetPage);
const PasswordForgetForm = withFirebase(PasswordForgetFormBase);
export { PasswordForgetForm, PasswordForgetLink };
