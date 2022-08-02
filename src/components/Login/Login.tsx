import React, { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { useAuth } from "../../auth/Auth/AuthProvider";

type LocationState = {
  path: string;
};

const Login = () => {
  const [user, setUser] = useState<string>("");
  const auth = useAuth();
  const navigate = useNavigate();
  const location = useLocation();

  const { path } = (location && (location.state as LocationState)) || {
    path: "/",
  };

  const handleLogin = (e: React.MouseEvent<HTMLElement>) => {
    e.preventDefault();
    auth.login(user);
    navigate(path, { replace: true });
  };

  return (
    <div>
      <h1>Login</h1>
      <input
        type="text"
        placeholder="Enter username"
        value={user}
        onChange={(e) => setUser(e.target.value)}
      />
      <button onClick={handleLogin}>Login</button>
    </div>
  );
};

export default Login;
