// UserLoginButton.js

import React, { Component } from "react";

class UserLoginButton extends Component {
  constructor(props) {
    super(props);

    this.state = {
      // AdminPage: false,
      UserPage: false,
    };
    console.log(props);
    
  }

  handleClick = () => {
    this.setState({
      UserPage: this.state.UserPage ? false : true,
    });
  };

  render() {
    return (
      <button
        name="userButton"
        // value={this.state.isUserButton}
        onClick={this.handleClick}
      >
        User
      </button>
    );
  }
}

export default UserLoginButton;
