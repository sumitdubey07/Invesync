import React, { createContext, useState, useEffect } from "react";

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [user, setUser] = useState(null);

  // Load logged-in user from localStorage on mount
  useEffect(() => {
    const loggedUser = JSON.parse(localStorage.getItem("loggedInUser"));
    if (loggedUser) {
      setIsAuthenticated(true);
      setUser(loggedUser);
    }
  }, []);

  // Signup function
  const signup = (userData) => {
    const storedUsers = JSON.parse(localStorage.getItem("users")) || [];
    storedUsers.push(userData);
    localStorage.setItem("users", JSON.stringify(storedUsers));
    setIsAuthenticated(true);
    setUser(userData);
    localStorage.setItem("loggedInUser", JSON.stringify(userData));
  };

  // Login function
  const login = ({ email, password }) => {
    const storedUsers = JSON.parse(localStorage.getItem("users")) || [];
    const existingUser = storedUsers.find(
      (u) => u.email === email && u.password === password
    );
    if (existingUser) {
      setIsAuthenticated(true);
      setUser(existingUser);
      localStorage.setItem("loggedInUser", JSON.stringify(existingUser));
      return true;
    } else {
      alert("Invalid credentials");
      return false;
    }
  };

  // Logout function
  const logout = () => {
    setIsAuthenticated(false);
    setUser(null);
    localStorage.removeItem("loggedInUser");
  };

  return (
    <AuthContext.Provider value={{ isAuthenticated, user, signup, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};
