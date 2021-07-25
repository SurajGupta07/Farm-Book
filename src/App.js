import React from 'react';
import {Routes, Route} from 'react-router-dom';
import './App.css';
import Signup from "../src/components/Signup";
import Login from "../src/components/Login";

function App() {
    return (
        <div>
            <Routes>
                <Route path="/signup" element={< Signup />}/>
                <Route path="/login" element={< Login />}/>
            </Routes>
        </div>
    );
}

export default App;
