import React from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../../auth/Auth/AuthProvider";

const Profile = () => {
  const auth = useAuth();
  const navigate = useNavigate();

  const handleLogout = () => {
    auth.logout();
    navigate("/login");
  };

  return (
    <div>
      <p>Welcome {auth.user}</p>
      <button onClick={handleLogout}>Logout</button>
    </div>
  );
};

export default Profile;
