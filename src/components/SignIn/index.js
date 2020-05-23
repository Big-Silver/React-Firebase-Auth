import React, { useState } from "react";
import { withRouter } from "react-router-dom";
import { compose } from "recompose";
import { noneAuthorization } from "../Session";
import { SignUpLink } from "../SignUp";
import { PasswordForgetLink } from "../PasswordForget";
import { withFirebase } from "../Firebase";
import * as ROUTES from "../../constants/routes";
const SignInPage = () => (
  <div className="auth-wrapper">
    <div className="auth-inner">
      <h1>SignIn</h1>
      <SignInForm />
      <PasswordForgetLink />
      <SignUpLink />
    </div>
  </div>
);

function SignInFormBase(props) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(null);

  function onSubmit(event) {
    props.firebase
      .doSignInWithEmailAndPassword(email, password)
      .then(() => {
        setEmail("");
        setPassword("");
        setError(null);
        props.history.push(ROUTES.HOME);
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
      case "password":
        setPassword(event.target.value);
        break;
      default:
        return;
    }
  }

  function isInvalid() {
    return password === "" || email === "";
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
      <div className="form-group">
        <label>Password</label>
        <input
          name="password"
          value={password}
          onChange={onChange}
          type="password"
          className="form-control"
          placeholder="Password"
        />
      </div>
      <button
        disabled={isInvalid()}
        type="submit"
        className="btn btn-primary btn-block"
      >
        Submit
      </button>
      {error && <p>{error.message}</p>}
    </form>
  );
}

const SignInForm = compose(withRouter, withFirebase)(SignInFormBase);

const condition = (authUser) => !!authUser;
export default noneAuthorization(condition)(SignInPage);
export { SignInForm };
