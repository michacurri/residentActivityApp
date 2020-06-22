// UserData.js

import firebase from "../../firebase";
import React, { Component } from "react";

class UserData extends Component {
  constructor() {
    super();
    this.state = {
      residents: [],
    };
  }

  componentDidMount() {
    const dbRef = firebase.database().ref();

    dbRef.on("value", (response) => {
      const residentData = [];
      const data = response.val().userData;

      for (let key in data) {
        residentData.push({
          resident: data[key],
          id: key,
        });
      }

      this.setState({
        residents: residentData,
      });
    });
  }

  render() {
    return (
      <div className="residentData">
        <table>
          <caption>
            <h2>Resident Data</h2>
          </caption>
          <thead>
            <tr>
              <th>Suite</th>
              <th>First</th>
              <th>Last</th>
              <th>Caregiver</th>
              <th>Assistance</th>
              <th>Meal</th>
              <th>email</th>
            </tr>
          </thead>
        </table>
        {this.state.residents.map(({id, resident}) => {
          return (
            <table key={id}>
              <tbody>
                <tr>
                  <th></th>
                  <td name="suite">{resident.suite}</td>
                  <td name="first">{resident.first}</td>
                  <td name="last">{resident.last}</td>
                  <td name="hasCaregiver">{resident.hasCaregiver}</td>
                  <td name="requiresAssist">{resident.requiresAssist}</td>
                  <td name="mealPreference">{resident.mealPreference}</td>
                  <td name="email">{resident.email}</td>
                </tr>
              </tbody>
            </table>
          );
        })}
        ;
      </div>
    );
  }
}

export default UserData;
