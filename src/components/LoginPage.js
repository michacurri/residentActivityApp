// LoginPage.js
import React, { Component } from "react";
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
      <div className="loginButtons">
        <button
          name="AdminPage"
          value={this.state.AdminPage}
          onClick={this.handleClick}
        >
          Admin
        </button>
        {this.state.AdminPage ? <AdminPage /> : null}

        <button
          name="UserPage"
          value={this.state.UserPage}
          onClick={this.handleClick}
        >
          User
        </button>

        {/* <AdminLoginButton handleClick={this.handleClick} />
        <UserLoginButton /> */}
        {this.state.UserPage ? <UserPage /> : null}
      </div>
    );
  }
}

export default LoginPage;
