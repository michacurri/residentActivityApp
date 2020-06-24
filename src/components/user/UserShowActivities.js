import React, { Component, Fragment } from "react";
import firebase from '../../firebase'

class UserShowActivities extends Component {
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
        <h3>Activity Options</h3>
        {this.state.activities.map(({ key, activity }) => {
          return (
            <div key={key} className="userShowActivities">
              <h3 className="userLiName">{activity.activityName}</h3>
              <h4 className="userLiDate">Date: {activity.activityDate}</h4>
              <h5 className="userLiAccs">
                Accessible: {activity.activityAccessible ? <h5>Yes</h5> : <h5>No</h5>}
              </h5>
              <h5 className="userLiMeal">
                Meal Included: {activity.activityMeal ? <h5>Yes</h5> : <h5>No</h5>}
              </h5>
              <h3 className="userLiSpots">
                Available Spots: {activity.activitySpotsAvail}
              </h3>
            </div>
          );
        })}
      </Fragment>
    );
  }
}

export default UserShowActivities