import {useState} from 'react';
import { Link } from "react-router-dom"; 
import { useDispatch } from "react-redux";
import {Input} from '../../../../common/components/Input';
import { Button } from '../../../../common/components/Button';
import { loginUser } from '../../authSlice';
import { useNavigate } from "react-router";

export const Login = () => {
    let [error, setError] = useState('');
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const handleLogin = (e) => {
        e.preventDefault();
        const email = e.currentTarget[0].value.trim();
        const password = e.currentTarget[1].value.trim();
        if(email === "" || password === "") {
            setError('Please enter valid details')
        }
        dispatch(loginUser({ email, password }));
        navigate('/profile/:userName')
    }

    return (
        <div className="bg-gray-100 h-screen flex flex-col items-center justify-center">
            <form className="bg-white rounded h-auto p-4" onSubmit={handleLogin}>
                <h2 className="text-4xl font-bold tracking-wide subpixel-antialiased pb-4">Farmbook</h2>
                <div className="pb-2 font-medium text-opacity-60 text-base text-gray-700">Login to see posts from your friends.</div>
                <div className="my-3">
                    <Input
                        id="email"
                        value="suraj@gmail.com"
                        placeholder="Enter your Email"/>
                </div>
                <div className="my-3">
                    <Input
                        id="password"
                        value="123456"
                        placeholder="Enter your password" 
                        autocomplete="off"/>
                </div>
                <div className="text-red-500 text-sm font-semibold">{error}</div>
                <div className="pt-6">
                    <Button text="Login" type="submit"/>
                </div>
                <div className="pt-5">
                    <span className="text-base text-gray-600">New user?</span>{" "}
                    <Link to="/signup" className="text-blue-600">Signup</Link>
                </div>
            </form>
        </div>
    )
}

export default Login;