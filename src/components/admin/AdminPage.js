// AdminPage.js
import React, { Component } from "react";
import AdminCreateActivity from "./AdminCreateActivity";
import AdminShowActivities from "./AdminShowActivities"
import UserData from "./UserData";

class AdminPage extends Component {
  render() {
    return (
      <div className="adminPage">
        <h2>ADMIN</h2>
        <AdminCreateActivity />
        <AdminShowActivities />
        <UserData />
      </div>
    );
  }
}

export default AdminPage;
