import React from 'react';
import {Routes, Route} from 'react-router-dom';
import './App.css';
import SignupForm from "./features/user/pages/signup/SignupForm";
import LoginForm from "./features/user/pages/Login/LoginForm";
import { PrivateRoute } from './common/components/PrivateRoute';
import { UserProfile } from './common/components/UserProfile';
import { Feed } from './common/components/Feed';

function App() {
    return (
        <div>
            <Routes>
                <PrivateRoute path="/" element={<Feed />} />
                <PrivateRoute path="/profile" element={<UserProfile />} />
                <Route path="/signup" element={<SignupForm />}/>
                <Route path="/login" element={<LoginForm />}/>
            </Routes>
        </div>
    );
}

export default App;
