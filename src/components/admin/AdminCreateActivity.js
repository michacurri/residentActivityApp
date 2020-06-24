// AdminCreateActivity.js

import React, { Component } from "react";
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
      activityMeal: false,
      activityDescription: "",
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
      [event.target.id]: String(event.target.checked),
    })       
  }

  handleSubmit = (event) => {
    event.preventDefault();
    const dbRef = firebase.database().ref("activities");

    const newActivities = {
      activityName: this.state.activityName,
      activityDate: this.state.activityDate,
      activitySpotsAvail: this.state.activitySpotsAvail,
      activityAccessible: this.state.activityAccessible,
      activityMeal: this.state.activityMeal,
      activityDescription: this.state.activityDescription,
    };

    dbRef.push(newActivities);

    // clear the inputs
    this.setState({
      activityName: "",
      activityDate: {},
      activitySpotsAvail: 0,
      activityAccessible: false,
      activityMeal: false,
      activityDescription: "",
    });
  };


  render() {
    return (
      <div className="adminInputActivityForm">
        <h3>activity maker</h3>
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
          <label htmlFor="activityDescription">
            Description of the Activity
          </label>
          <input 
          type="textarea"
          maxLength="140"
          rows="5"
          placeholder="Enjoy an elegant evening out with the Toronto Symphony Orchestra..."
          value={this.state.activityDescription}
          onChange={this.handleChange}
          name="activityDescription"
          id="activityDescription"
          />
          <br />

          <label htmlFor="activityAccessible">
            Is this activity accessible?
          </label>
          <input
            type="checkbox"
            value={this.state.activityAccessible}
            onChange={this.handleChecked}
            name="activityAccessible"
            id="activityAccessible"
          />
          <br />

          <label htmlFor="activityMeal">Is a meal included?</label>
          <input
            type="checkbox"
            value={this.state.activityMeal}
            onChange={this.handleChecked}
            name="activityMeal"
            id="activityMeal"
          />
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
      </div>
    );
  }
}

export default AdminCreateActivity;
