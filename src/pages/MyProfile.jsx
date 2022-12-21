import React from "react";
import { Outlet } from "react-router-dom";
import Profileheader from "../components/ProfileComponents/ProfileHeader";

function MyProfile() {
  return (
    <div>
      <Profileheader></Profileheader>

      <Outlet />
    </div>
  );
}

export default MyProfile;
