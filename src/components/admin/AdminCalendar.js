// AdminCalendar.js

import React, { Component } from "react";
import Calendar from "react-calendar";

class AdminCalendar extends Component {
  constructor() {
    super();
    this.state = {
      date: new Date(),
    };
  }

  onChange = (date) => this.setState({ date });

  render() {
    return (
      <div>
        <h3>Calendar</h3>
        <Calendar onChange={this.onChange} value={this.state.date} />
      </div>
    );
  }
}

export default AdminCalendar;
