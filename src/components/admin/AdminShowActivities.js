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
    // console.log(dbRef)

    dbRef.on("value", (response) => {
      const newState = [];
      const data = response.val();
      console.log(data);

      for (let key in data) {
        newState.push({
          activity: data[key],
          id: key,
        });
        console.log(newState);
      }

      this.setState({
        activities: newState,
      });
      console.log(this.state.activities);
    });
  }

  render() {
    return (
    <h1>Created Activities Here</h1>
    )
  }
}

export default AdminShowActivities;
