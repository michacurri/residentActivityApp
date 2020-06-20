// AdminPage.js
import React, { Component, Fragment } from "react";
import UserData from './UserData'

class AdminPage extends Component {
  render() {
    return (
      <Fragment>
        {/* <InputActivityBlock />
        <FormBuilderBlock />
        <UserDataSelector /> */}
        <UserData />
      </Fragment>
    );
  }
}

export default AdminPage;
