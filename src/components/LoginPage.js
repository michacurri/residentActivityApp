// LoginPage.js
import React, { Component } from 'react'
import AdminPage from './admin/AdminPage';
// import UserPage from './components/user/UserPage';

class LoginPage extends Component {
  render() {
    return (
      <div className="App">
        <AdminPage />
        {/* <UserPage /> */}
      </div>
    );
  }
}

export default LoginPage;