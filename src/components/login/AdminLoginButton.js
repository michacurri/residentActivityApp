// AdminLoginButton.js

import React, { Component } from "react";
// import AdminPage from "../admin/AdminPage";

class AdminLoginButton extends Component {
  constructor() {
    super();
    this.state = {
      AdminPage: adminPage,
    };
  }

  handleClick() {
    this.setState({
      AdminPage: this.state.AdminPage ? false : true,
    });
  }
  render() {
    return (
      <button
        name="AdminPage"
        value={this.state.AdminPage}
        onClick={() => {
          this.handleClick;
        }}
      >
        Admin
      </button>
    );
  }
}

export default AdminLoginButton;
