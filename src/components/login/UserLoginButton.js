// UserLoginButton.js

import React, { Component } from "react";

class UserLoginButton extends Component {
  render() {
    return (
      <button
        name="UserButton"
        className="navButton"
        onClick={this.props.handleUserClick}
      >
        User
      </button>
    );
  }
}

export default UserLoginButton;
