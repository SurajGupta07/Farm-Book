import React from "react";
import { Route, Routes } from "react-router-dom";
import "./App.css";

import { FollowUserProfile } from "./common/components/FollowUserProfile";
import { Header } from "./common/components/Header";
import { Network } from "./common/components/Network";
import { Notfound } from "./common/components/NotFound";
import { PrivateRoute } from "./common/components/PrivateRoute";
import { Feed } from "./features/post/Pages/Feed/Feed";
import { UserProfile } from "./pages/profile/UserProfile";
import { Login } from "./pages/login/LoginForm";
import { Signup } from "./pages/signup/SignupForm";

function App() {
  return (
    <div>
      <Header />
      <Routes>
        <PrivateRoute path="/" element={<Feed />} />
        <PrivateRoute path="/profile/:username" element={<UserProfile />} />
        <PrivateRoute
          path="/follow/:username"
          element={<FollowUserProfile />}
        />
        <Route path="/signup" element={<Signup />} />
        <Route path="/login" element={<Login />} />
        <PrivateRoute path="/:username/network" element={<Network />} />
        <Route path="*" element={<Notfound />} />
      </Routes>
    </div>
  );
}

export default App;
