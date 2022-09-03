import React from "react";
import PropTypes from "prop-types";
import {
  BrowserRouter,
  Routes,
  Route,
  useLocation,
  Navigate,
} from "react-router-dom";

import { AuthProvider, useAuth } from "./contexts/AuthContext";

import Register from "./pages/Register";
import Login from "./pages/Login";
import CreateCall from "./pages/CreateCall";
import Calls from "./pages/Calls";

import "./index.css";

function RequireAuth({ children }) {
  let { signed } = useAuth();
  let location = useLocation();

  if (!signed()) {
    return <Navigate to="/login" state={{ from: location }} replace />;
  }

  return children;
}

RequireAuth.propTypes = {
  children: PropTypes.element,
};

function App() {
  return (
    <BrowserRouter>
      <AuthProvider>
        <Routes>
          <Route path="/register" element={<Register />} />
          <Route path="/login" element={<Login />} />
          <Route
            path="/createCall"
            element={
              <RequireAuth>
                <CreateCall />
              </RequireAuth>
            }
          />
          <Route
            path="/calls"
            element={
              <RequireAuth>
                <Calls />
              </RequireAuth>
            }
          />
        </Routes>
      </AuthProvider>
    </BrowserRouter>
  );
}

export default App;
