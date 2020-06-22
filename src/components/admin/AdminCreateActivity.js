// AdminCreateActivity.js

import React, { Component, Fragment } from "react";
import firebase from "../../firebase";

class AdminCreateActivity extends Component {
  constructor() {
    super();
    this.state = {
      activities: [],
      activityName: "",
      activitySpotsAvail: 0,
      activityDate: {},
      activityAccessible: "False",
      ActivityMeal: "False",
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
  handleChange = (event) => {
    // GOAL of function
    // tell React to update userInput state
    // to be equal to whatever user is typing

    this.setState({
      // userInput: event.target.value,
      [event.target.name]: event.target.value,
    });
  };

  handleSubmit = (event) => {
    event.preventDefault();
    // get another locally scoped dbRef
    const dbRef = firebase.database().ref("activities");

    const newActivities = {
      activityName: this.state.activityName,
      activityDate: this.state.activityDate,
      activitySpotsAvail: this.state.activitySpotsAvail,
      activityAccessible: this.state.activityAccessible,
      ActivityMeal: this.state.ActivityMeal,
    };

    // using the FIREBASE push method (not a JavaScript push)
    dbRef.push(newActivities);
    console.log(newActivities);

    // clear the userInput
    this.setState({
      activityName: "",
      activityDate: {},
      activitySpotsAvail: 0,
      activityAccessible: "False",
      ActivityMeal: "False",
    });
  };

  render() {
    return (
      <Fragment>
        <form>
          <label htmlFor="activityName">Activity Name</label>
          <br />
          <input
            type="text"
            value={this.state.activityName}
            onChange={this.handleChange}
            name="activityName"
            id="activityName"
          />
          <br />
          <label htmlFor="activityDate">Date of Activity</label>
          <br />
          <input
            type="date"
            value={this.state.activityDate}
            onChange={this.handleChange}
            name="activityDate"
            id="activityDate"
          />
          <br />
          <input
            type="checkbox"
            value={this.state.activityAccessible}
            onChange={this.handleChange}
            name="activityAccessible"
            id="activityAccessible"
          />
          <label htmlFor="activityAccessible">
            Is this activity accessible?
          </label>
          <br />

          <input
            type="checkbox"
            value={this.state.ActivityMeal}
            onChange={this.handleChange}
            name="ActivityMeal"
            id="ActivityMeal"
          />
          <label htmlFor="ActivityMeal">Is a meal included?</label>
          <br />

          <label htmlFor="activitySpots">Space Available</label>
          <br />
          <input
            type="number"
            value={this.state.activitySpotsAvail}
            onChange={this.handleChange}
            name="activitySpotsAvail"
            id="activitySpotsAvail"
            placeholder="#"
          />
          <br />
          <button onClick={this.handleSubmit}>
            Add Activity to the Calendar
          </button>
        </form>

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
      </Fragment>
    );
  }
}

export default AdminCreateActivity;
