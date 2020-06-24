// LoginPage.js
import React, { Component, Fragment } from "react";
import AdminPage from "./admin/AdminPage";
import AdminLoginButton from "./login/AdminLoginButton";
import UserPage from "./user/UserPage";
import UserLoginButton from "./login/UserLoginButton";

class LoginPage extends Component {
  constructor() {
    super();
    this.state = {
      AdminPage: false,
      UserPage: false,
    };
    this.handleAdminClick = this.handleAdminClick.bind(this);
    this.handleUserClick = this.handleUserClick.bind(this);
  }

  handleAdminClick() {
    this.setState({
      AdminPage: this.state.AdminPage ? false : true,
      UserPage:  false 
    });
  }
 
  handleUserClick() {
    this.setState({
      UserPage: this.state.UserPage ? false : true,
      AdminPage:  false 
    });
  }

  render() {
    return (
      <Fragment>
        <AdminLoginButton handleAdminClick={this.handleAdminClick} />
        <UserLoginButton handleUserClick={this.handleUserClick} />
        {this.state.AdminPage ? <AdminPage /> : null}
        {this.state.UserPage ? <UserPage /> : null}
      </Fragment>
    );
  }
}

export default LoginPage;
