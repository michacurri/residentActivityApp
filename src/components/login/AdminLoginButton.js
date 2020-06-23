// AdminLoginButton.js

import React from "react";
// import AdminPage from "../admin/AdminPage";

const AdminLoginButton = (props) => {
  console.log(props);
  
  {props.state.AdminPage ? <AdminPage /> : null}
  return (
    <button
      name="adminButton"
      onClick={props.handleClick}
    >
      Admin
    </button>
  );
};

export default AdminLoginButton;
