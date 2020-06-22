import React, { Component } from "react";
import AdminCreateActivity from './AdminCreateActivity'

class InputActivityBlock extends Component {
  render() {
    return (
      <div className="inputActivityBlock">
        <h1>activity maker</h1>
          <div className="activityBackground">
            <AdminCreateActivity />
          </div>
      </div>
    );
  }
}

export default InputActivityBlock;
