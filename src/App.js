import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Home from "./page/Home";
import Portfolio from "./page/Portfolio";
import Analytics from "./page/Analytics";
import About from "./page/About";
import Login from "./page/Login";
import Signup from "./page/Signup";
import { AuthProvider } from "./context/AuthContext";
import ProtectedRoute from "./components/ProtectedRoute";
import DisclaimerFooter from "./components/DisclaimerFooter";

const App = () => {
  return (
    <AuthProvider>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route
            path="/portfolio"
            element={
              <ProtectedRoute>
                <Portfolio />
              </ProtectedRoute>
            }
          />
          <Route
            path="/analytics"
            element={
              <ProtectedRoute>
                <Analytics />
              </ProtectedRoute>
            }
          />
          <Route path="/about" element={<About />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
        </Routes>

        {/* Disclaimer always at bottom */}
        <DisclaimerFooter />

        {/* Main site footer */}
        <Footer />
      </BrowserRouter>
    </AuthProvider>
  );
};

export default App;
