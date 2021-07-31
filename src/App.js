import React from 'react';
import {Routes, Route} from 'react-router-dom';
import './App.css';
import SignupForm from "./features/user/pages/signup/SignupForm";
import LoginForm from "./features/user/pages/Login/LoginForm";
import { PrivateRoute } from './common/components/PrivateRoute';
import { UserProfile } from './features/user/pages/profile/UserProfile';
import { Feed } from './features/post/Pages/Feed/Feed';
import { Header } from './common/components/Header';
import {Notification} from "./common/components/Notification";
import { Network } from './common/components/Network';

function App() {
    return (
        <div>
            <Header />
            <Routes>
                <PrivateRoute path="/" element={<Feed />} />
                <PrivateRoute path="/notifications" element={<Notification />} />
                <PrivateRoute path="/profile" element={<UserProfile />} />
                <PrivateRoute path="/profile/:userId" element={<UserProfile />} />
                <Route path="/signup" element={<SignupForm />}/>
                <Route path="/login" element={<LoginForm />}/>
                <Route path="/network" element={<Network />} />
            </Routes>
        </div>
    );
}

export default App;
