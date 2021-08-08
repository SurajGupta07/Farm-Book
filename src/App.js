import React from 'react';
import {Routes, Route} from 'react-router-dom';
import './App.css';
import SignupForm from "./features/user/pages/signup/SignupForm";
import LoginForm from "./features/user/pages/Login/LoginForm";
import {PrivateRoute} from './common/components/PrivateRoute';
import {UserProfile} from './features/user/pages/profile/UserProfile';
import {Feed} from './features/post/Pages/Feed/Feed';
import {Header} from './common/components/Header';
import {Network} from './common/components/Network';
import { useSelector } from 'react-redux';
import { FollowUserProfile } from './common/components/FollowUserProfile';

function App() {

    let token = useSelector((state) => state.auth.token);

    return (
        <div>
            {token && <Header/>}
            <Routes>
                <PrivateRoute path="/" element={< Feed />}/> 
                <PrivateRoute path="/profile/:username" element={< UserProfile />}/>
                <PrivateRoute path="/follow/:username" element={<FollowUserProfile />} />
                <Route path="/signup" element={< SignupForm />}/>
                <Route path="/login" element={< LoginForm />}/> 
                <PrivateRoute path="/:username/network" element={<Network />} />
            </Routes>
        </div>
    );
}

export default App;
