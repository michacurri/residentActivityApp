// LoginPage.js
import React, { Component } from "react";
// import AdminPage from "./admin/AdminPage";
import AdminLoginButton from "./login/AdminLoginButton";
import UserPage from "./user/UserPage";
import UserLoginButton from "./login/UserLoginButton";

class LoginPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      AdminPage: false,
      UserPage: false,
    };
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick = (props) => {
    console.log(props);
    
    this.setState({
      AdminPage: this.state.AdminPage ? false : true,
      UserPage: this.state.UserPage ? false : true,
    });
  };
  render() {
    // if the state of admin menu is true, render it, otherwise (null)
    return (
      <div className="loginButtons">
        <AdminLoginButton />
        

        <UserLoginButton />
        {this.state.UserPage ? <UserPage /> : null}
      </div>
    );
  }
}

export default LoginPage;
