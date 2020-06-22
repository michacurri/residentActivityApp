// InputActivityName.js

import React from "react";
import firebase from "../../firebase";
import { Component } from "react";

class InputActivityName extends Component {
  // pushes Data to a database for Activities
  constructor() {
    super();
    this.state = {
      activities: [],
      // activityName: "",
      // activitySpotsAvail: 0,
    };
  }

  componentDidMount() {
    const dbRef = firebase.database().ref();
    // console.log(dbRef)

    dbRef.on("value", (response) => {
      const newActivities = [];
      const data = response.val().activities;
      console.log(data);

      for (let key in data) {
        newActivities.push({
          activity: data[key],
          id: key,
        });
        console.log(data[key]);
        console.log(key);
        
      }

      console.log(this.state.newActivities);
      this.setState({
        activities: newActivities,
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
    const dbRef = firebase.database().ref();

    // using the FIREBASE push method (not a JavaScript push)
    dbRef.push(this.state.activities);
    
    // clear the userInput
    this.setState({
      activityName: "",
      activityDate: {},
      activitySpotsAvail: 0,
      // accessible: '',
      // mealIncluded: ''
    });
    console.log(this.state);
  };

  render() {
    return (
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
          value={this.state.date}
          onChange={this.handleChange}
          name="activityDate"
          id="activityDate"
        />
        <br />
        {/* <input
          type="checkbox"
          value={this.state.accessible}
          onChange={this.handleChange}
          name="accessibleCheckbox"
          id="accessibleCheckbox"
        />
        <label htmlFor="accessibleCheckbox">Is this activity accessible?</label>
        <br />

        <input
          type="checkbox"
          value={this.state.mealIncluded}
          onChange={this.handleChange}
          name="mealCheckbox"
          id="mealCheckbox"
        />
        <label htmlFor="mealCheckbox">Is a meal included?</label>
        <br /> */}

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
    );
  }
}
export default InputActivityName;
