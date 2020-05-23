import React, { useState } from "react";
import { Link, withRouter } from "react-router-dom";
import { compose } from "recompose";
import { noneAuthorization } from "../Session";
import { withFirebase } from "../Firebase";
import * as ROUTES from "../../constants/routes";

const SignUpPage = () => (
  <div className="auth-wrapper">
    <div className="auth-inner">
      <h1>SignUp</h1>
      <SignUpForm />
    </div>
  </div>
);

function SignUpFormBase(props) {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [passwordOne, setPasswordOne] = useState("");
  const [passwordTwo, setPasswordTwo] = useState("");
  const [error, setError] = useState(null);

  function onSubmit(event) {
    props.firebase
      .doCreateUserWithEmailAndPassword(email, passwordOne)
      .then((authUser) => {
        return props.firebase.user(authUser.user.uid).set({
          username,
          email,
        });
      })
      .then(() => {
        setUsername("");
        setEmail("");
        setPasswordOne("");
        setPasswordTwo("");
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
      case "username":
        setUsername(event.target.value);
        break;
      case "email":
        setEmail(event.target.value);
        break;
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
    return (
      passwordOne !== passwordTwo ||
      passwordOne === "" ||
      email === "" ||
      username === ""
    );
  }

  return (
    <form onSubmit={onSubmit}>
      <div className="form-group">
        <label>Full Name</label>
        <input
          name="username"
          value={username}
          onChange={onChange}
          type="text"
          className="form-control"
          placeholder="Full Name"
        />
      </div>
      <div className="form-group">
        <label>Email Address</label>
        <input
          name="email"
          value={email}
          onChange={onChange}
          type="text"
          className="form-control"
          placeholder="Email Address"
        />
      </div>
      <div className="form-group">
        <label>Password</label>
        <input
          name="passwordOne"
          value={passwordOne}
          onChange={onChange}
          type="password"
          className="form-control"
          placeholder="Password"
        />
      </div>
      <div className="form-group">
        <label>Confirm Password</label>
        <input
          name="passwordTwo"
          value={passwordTwo}
          onChange={onChange}
          type="password"
          className="form-control"
          placeholder="Confirm Password"
        />
      </div>

      <button
        disabled={isInvalid()}
        type="submit"
        className="btn btn-primary btn-block"
      >
        Sign Up
      </button>
      {error && <p>{error.message}</p>}
      <p className="forgot-password text-right">
        Already registered <Link to={ROUTES.SIGN_IN}>sign in?</Link>
      </p>
    </form>
  );
}

const SignUpLink = () => (
  <p>
    Don't have an account? <Link to={ROUTES.SIGN_UP}>Sign Up</Link>
  </p>
);

const SignUpForm = compose(withRouter, withFirebase)(SignUpFormBase);

const condition = (authUser) => !!authUser;
export default noneAuthorization(condition)(SignUpPage);
export { SignUpForm, SignUpLink };
