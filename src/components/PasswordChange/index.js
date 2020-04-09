import React, { Component } from "react";
import { withRouter } from "react-router-dom";
import { compose } from "recompose";
import { withFirebase } from "../Firebase";
const INITIAL_STATE = {
  passwordOne: "",
  passwordTwo: "",
  error: null
};

const PasswordChangePage = () => (
  <div className="auth-wrapper">
    <div className="auth-inner">
      <h1>Password Change</h1>
      <PasswordChangeForm />
    </div>
  </div>
);
class PasswordChangeFormBase extends Component {
  constructor(props) {
    super(props);
    this.state = { ...INITIAL_STATE };
  }
  onSubmit = event => {
    const { passwordOne } = this.state;
    this.props.firebase
      .doPasswordUpdate(passwordOne)
      .then(() => {
        this.setState({ ...INITIAL_STATE });
      })
      .catch(error => {
        this.setState({ error });
      });
    event.preventDefault();
  };
  onChange = event => {
    this.setState({ [event.target.name]: event.target.value });
  };
  render() {
    const { passwordOne, passwordTwo, error } = this.state;
    const isInvalid = passwordOne !== passwordTwo || passwordOne === "";
    return (
      <form onSubmit={this.onSubmit}>
        <div className="form-group">
          <label>New Password</label>
          <input
            name="passwordOne"
            value={passwordOne}
            onChange={this.onChange}
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
            onChange={this.onChange}
            type="password"
            className="form-control"
            placeholder="Confirm New Password"
          />
        </div>

        <button disabled={isInvalid} type="submit" className="btn btn-primary btn-block">
          Reset My Password
        </button>
        {error && <p>{error.message}</p>}
      </form>
    );
  }
}
const PasswordChangeForm = compose(
  withRouter,
  withFirebase
)(PasswordChangeFormBase);
export default PasswordChangePage;
export { PasswordChangeForm };
