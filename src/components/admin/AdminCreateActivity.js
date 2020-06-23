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
      activityAccessible: false,
      ActivityMeal: false,
    };

    // this.handleChecked = this.handleChecked.bind(this);
  }

  handleChange = (event) => {
    this.setState({
      [event.target.name]: event.target.value,
    });
  };

  // handle CHECKBOXES
  handleChecked = (event) => {
    this.setState({
      [event.target.checked]: !event.target.checked,
    })
    console.log(event.target.checked);    
  }


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

    dbRef.push(newActivities);

    // clear the inputs
    this.setState({
      activityName: "",
      activityDate: {},
      activitySpotsAvail: 0,
      activityAccessible: false,
      ActivityMeal: false,
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
            onChange={this.handleChecked}
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
            onChange={this.handleChecked}
            name="ActivityMeal"
            id="ActivityMeal"
          />
          <label htmlFor="ActivityMeal">Is a meal included?</label>
          <br />

          <label htmlFor="activitySpotsAvail">Space Available</label>
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
      </Fragment>
    );
  }
}

export default AdminCreateActivity;
