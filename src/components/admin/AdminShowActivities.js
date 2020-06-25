// AdminShowActivities.js

import React, { Component } from "react";
import firebase from "../../firebase";

class AdminShowActivities extends Component {
  constructor() {
    super();
    this.state = {
      activities: [],
    };
  }

  componentDidMount() {
    const dbRef = firebase.database().ref("activities");

    dbRef.on("value", (response) => {
      const newState = [];
      const data = response.val();

      for (let key in data) {
        newState.push({
          activity: data[key],
          key: key,
        });
      }

      this.setState({
        activities: newState,
      });
    });
  }

  deleteActivity = (key) => {
    const dbRef = firebase.database().ref('activities');
    dbRef.child(key).remove();
    console.log("delete pushed");
  };

  render() {
    return (
    <div className="adminShowActivities">
          {this.state.activities.map(({ key, activity }) => {
            return (
                <ul key={key} 
                className="adminListActivities">
                  <li>Name: {activity.activityName}</li>
                  <li>Date: {activity.activityDate}</li>
                  <button onClick={() => {
                      this.deleteActivity(key);
                    }}>Delete</button>
                </ul>
            );
          })}
        </div>
    )
  }
}

export default AdminShowActivities;
