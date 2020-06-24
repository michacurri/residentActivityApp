// LoginPage.js
import React, { Component, Fragment } from "react";
import AdminPage from "./admin/AdminPage";
// import AdminLoginButton from "./login/AdminLoginButton";
import UserPage from "./user/UserPage";
// import UserLoginButton from "./login/UserLoginButton";

class LoginPage extends Component {
  constructor() {
    super();
    this.state = {
      AdminPage: false,
      UserPage: false,
    };
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    this.setState({
      AdminPage: this.state.AdminPage ? false : true,
      UserPage: this.state.UserPage ? false : true,
    });
  }
  render() {
    return (
      <Fragment>
        <button
          name="AdminButton"
          value={this.state.AdminPage}
          onClick={this.handleClick}
        >
          Admin
        </button>
        <button
          name="UserButton"
          value={this.state.UserPage}
          onClick={this.handleClick}
        >
          User
        </button>
        {/* <AdminLoginButton handleClick={this.handleClick} />
        <UserLoginButton /> */}
        {this.state.AdminPage ? <AdminPage /> : null}
        {this.state.UserPage ? <UserPage /> : null}
      </Fragment>
    );
  }
}

export default LoginPage;
