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
      const data = response.val();
      console.log(data[0]);

      for (let key in data) {
        residentData.push({
          resident: data[key],
          id: key,
        });
      }

      this.setState({
        residents: residentData,
      });
      console.log(residentData);
    });
  }

  render() {
    return (
      <div className="residentData">
        <table>
          {/* <caption>
                  <h2>Resident Data</h2>
                </caption> */}
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
        {this.state.residents.map((r) => {
          console.log(r);
          return (
            <table>
              <tbody>
                <tr>
                  <th key={r.id}></th>
                  <td name="suite">{r.resident.suite}</td>
                  <td name="first">{r.resident.first}</td>
                  <td name="last">{r.resident.last}</td>
                  <td name="hasCaregiver">{r.resident.hasCaregiver}</td>
                  <td name="requiresAssist">{r.resident.requiresAssist}</td>
                  <td name="mealPreference">{r.resident.mealPreference}</td>
                  <td name="email">{r.resident.email}</td>
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
