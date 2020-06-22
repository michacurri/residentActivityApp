import React, { Component } from "react";
import AdminCreateActivity from './AdminCreateActivity'
import AdminShowActivities from './AdminShowActivities'

class InputActivityBlock extends Component {
  render() {
    return (
      <div className="inputActivityBlock">
        <h1>activity maker</h1>
          <div className="activityBackground">
            <AdminCreateActivity />
            {/* created activities  */}
            {/* <AdminShowActivities /> */}
          </div>
      </div>
    );
  }
}

export default InputActivityBlock;
