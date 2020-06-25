// UserPage.js

import React, { Component } from "react";
import UserShowActivities from "./UserShowActivities";

class UserPage extends Component {
  render() {
    return (
      <div className="userPage">
        <h2>USER</h2>
        <UserShowActivities />
        {/* <ActivityOptionsBlock /> */}
        {/* <UserResponseInput /> */}
      </div>
    );
  }
}

export default UserPage;
