// AdminLoginButton.js

import React, { Component } from "react";
// import AdminPage from "../admin/AdminPage";

class AdminLoginButton extends Component {
  render() {
    return (
      <button
        name="AdminPage"
        onClick={this.props.handleAdminClick}
      >
        Admin
      </button>
    );
  }
}

export default AdminLoginButton;
