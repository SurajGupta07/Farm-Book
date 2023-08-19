import React from "react";
import { Route, Routes } from "react-router-dom";

import "./App.css";
import { FollowUserProfile } from "./common/components/FollowUserProfile";
import { Header } from "./common/components/Header";
import { Network } from "./common/components/Network";
import { Notfound } from "./common/components/NotFound";
import { PrivateRoute } from "./common/components/PrivateRoute";
import { Feed } from "./features/post/Pages/Feed/Feed";
import { Login } from "./pages/login/LoginForm";
import { UserProfile } from "./pages/profile/UserProfile";
import { Signup } from "./pages/signup/SignupForm";

function App() {
  return (
    <React.Fragment>
      <Header />
      <Routes>
        <Route
          path="/"
          element={
            <PrivateRoute>
              <Feed />
            </PrivateRoute>
          }
        />
        <Route
          path="/profile/:username"
          element={
            <PrivateRoute>
              <UserProfile />
            </PrivateRoute>
          }
        />
        <Route
          path="/follow/:username"
          element={
            <PrivateRoute>
              <FollowUserProfile />
            </PrivateRoute>
          }
        />
        <Route path="/signup" element={<Signup />} />
        <Route path="/login" element={<Login />} />
        <Route
          path="/:username/network"
          element={
            <PrivateRoute>
              <Network />
            </PrivateRoute>
          }
        />
        <Route path="*" element={<Notfound />} />
      </Routes>
      /
    </React.Fragment>
  );
}

export default App;
