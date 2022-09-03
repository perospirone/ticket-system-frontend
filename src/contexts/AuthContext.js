import React, { createContext, useContext, useState } from "react";
import PropTypes from "prop-types";

import { apiWithoutToken as api } from "../services/api";

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);

  async function Register(credentials) {
    try {
      const response = await api.post("/register", credentials);

      localStorage.setItem("token", response.data.token);
    } catch (err) {
      return err;
    }
  }

  async function Login(credentials) {
    try {
      const response = await api.post("/login", credentials);

      localStorage.setItem("token", response.data.token);
    } catch (err) {
      return err;
    }
  }

  function Logout() {
    setUser(null);
    localStorage.removeItem("user");
    localStorage.removeItem("token");
  }

  function Signed() {
    const storagedToken = localStorage.getItem("token");

    if (storagedToken) {
      return true;
    } else {
      return false;
    }
  }

  return (
    <AuthContext.Provider
      value={{ signed: Signed, user, Register, Login, Logout }}
    >
      {children}
    </AuthContext.Provider>
  );
};

AuthProvider.propTypes = {
  children: PropTypes.element,
};

export function useAuth() {
  const context = useContext(AuthContext);

  return context;
}
