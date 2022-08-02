import React, { createContext, useContext, useState } from "react";

interface Props {
  children: React.ReactNode;
}

interface Value {
  user: string;
  login: (user: string) => void;
  logout: () => void;
}

const AuthContext = createContext<Value>({
  user: "",
  login: (user) => {},
  logout: () => {},
});

const AuthProvider: React.FC<Props> = ({ children }) => {
  const [user, setUser] = useState("");

  const login = (user: string) => {
    setUser(user);
  };

  const logout = () => {
    setUser("");
  };

  return (
    <AuthContext.Provider value={{ user, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  return useContext(AuthContext);
};

export default AuthProvider;
