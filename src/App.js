import React from "react";
import { Routes, Route } from "react-router-dom";
import "./App.css";
import SignupForm from "./features/user/pages/signup/SignupForm";
import LoginForm from "./features/user/pages/Login/LoginForm";
import { PrivateRoute } from "./common/components/PrivateRoute";
import { UserProfile } from "./features/user/pages/profile/UserProfile";
import { Feed } from "./features/post/Pages/Feed/Feed";
import { Header } from "./common/components/Header";
import { Network } from "./common/components/Network";
import { FollowUserProfile } from "./common/components/FollowUserProfile";
import Notfound from "./common/components/NotFound";

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
        <Route path="/signup" element={<SignupForm />} />
        <Route path="/login" element={<LoginForm />} />
        <PrivateRoute path="/:username/network" element={<Network />} />
        <Route path="*" element={<Notfound />} />
      </Routes>
    </div>
  );
}

export default App;
