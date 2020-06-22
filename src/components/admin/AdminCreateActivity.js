// AdminCreateActivity.js

import React, { Component } from "react";
import AdminInputSpotsAvail from './AdminInputSpotsAvail';
import InputActivityName from './InputActivityName'

class AdminCreateActivity extends Component {
  render() {
    return (
      <div className="adminCreateActivity">
        <InputActivityName />
        <AdminInputSpotsAvail />
      </div>
    );
  }
}

export default AdminCreateActivity;
