// AdminPage.js
import React, { Component } from "react";
import InputActivityBlock from "./InputActivityBlock";
import UserData from "./UserData";

class AdminPage extends Component {
  render() {
    return (
      <div className="adminPage">
        <InputActivityBlock />
        {/* <FormBuilderBlock /> */}
        {/* <UserDataSelector /> */}
        <UserData />
      </div>
    );
  }
}

export default AdminPage;
