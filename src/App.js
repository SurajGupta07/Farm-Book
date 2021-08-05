import React, {useEffect} from 'react';
import {Routes, Route} from 'react-router-dom';
import './App.css';
import SignupForm from "./features/user/pages/signup/SignupForm";
import LoginForm from "./features/user/pages/Login/LoginForm";
import {PrivateRoute} from './common/components/PrivateRoute';
import {UserProfile} from './features/user/pages/profile/UserProfile';
import {Feed} from './features/post/Pages/Feed/Feed';
import {Header} from './common/components/Header';
import {Notification} from "./common/components/Notification";
import {Network} from './common/components/Network';
import { useSelector, useDispatch } from 'react-redux';
import { getCurrentUserData } from './features/user/authSlice';

function App() {

    let token = useSelector((state) => state.auth.token);
    let _id = useSelector((state) => state.auth.data._id)
    const dispatch = useDispatch();
    // useEffect(() => {
    //     if (token && _id) {
    //         dispatch(getCurrentUserData(token, _id));
    //     }
    // }, [dispatch, token]);

    return (
        <div>
            {token && <Header/>}
            <Routes>
                <PrivateRoute path="/" element={< Feed />}/> 
                {/* <PrivateRoute path="/notifications" element={<Notification />} /> */}
                <PrivateRoute path="/profile/:username" element={< UserProfile />}/>
                <Route path="/signup" element={< SignupForm />}/>
                <Route path="/login" element={< LoginForm />}/> 
                {/* <Route path="/network" element={<Network />} /> */}
            </Routes>
        </div>
    );
}

export default App;
