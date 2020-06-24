// UserPage.js

import React, { Component, Fragment } from "react";
import firebase from "../../firebase";

class UserPage extends Component {
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

  render() {
    return (
      <Fragment>
        <h1>UserPage</h1>
        <div className="adminShowActivities">
          <h2>Created Activities Here</h2>
          {this.state.activities.map(({ key, activity }) => {
            return (
              <ul key={key}>
                <li>Name: {activity.activityName}</li>
                <li>Date: {activity.activityDate}</li>
                <li>Accessible: {activity.activityAccessible}</li>
                <li>Meal Included: {activity.activityMeal}</li>
                <li>Available Spots: {activity.activitySpotsAvail}</li>
              </ul>
            );
          })}
        </div>
        {/* <ActivityOptionsBlock /> */}
        {/* <UserResponseInput /> */}
      </Fragment>
    );
  }
}

export default UserPage;
