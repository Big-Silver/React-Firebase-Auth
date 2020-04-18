import React, { Component } from "react";
import { Link } from "react-router-dom";
import { withFirebase } from "../Firebase";
import { noneAuthorization } from "../Session";
import * as ROUTES from "../../constants/routes";
const PasswordForgetPage = () => (
  <div className="auth-wrapper">
    <div className="auth-inner">
      <h1>PasswordForget</h1>
      <PasswordForgetForm />
    </div>
  </div>
);
const INITIAL_STATE = {
  email: "",
  error: null,
};
class PasswordForgetFormBase extends Component {
  constructor(props) {
    super(props);
    this.state = { ...INITIAL_STATE };
  }
  onSubmit = (event) => {
    const { email } = this.state;
    this.props.firebase
      .doPasswordReset(email)
      .then(() => {
        this.setState({ ...INITIAL_STATE });
      })
      .catch((error) => {
        this.setState({ error });
      });
    event.preventDefault();
  };
  onChange = (event) => {
    this.setState({ [event.target.name]: event.target.value });
  };
  render() {
    const { email, error } = this.state;
    const isInvalid = email === "";
    return (
      <form onSubmit={this.onSubmit}>
        <div className="form-group">
          <label>Email address</label>
          <input
            name="email"
            value={this.state.email}
            onChange={this.onChange}
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
}
const PasswordForgetLink = () => (
  <p className="forgot-password text-right">
    <Link to={ROUTES.PASSWORD_FORGET}>Forgot Password?</Link>
  </p>
);

const condition = (authUser) => !!authUser;
export default noneAuthorization(condition)(PasswordForgetPage);
const PasswordForgetForm = withFirebase(PasswordForgetFormBase);
export { PasswordForgetForm, PasswordForgetLink };
