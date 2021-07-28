import {useState} from 'react';
import { useDispatch } from "react-redux";
import {Input} from '../../../../common/components/Input/Input';
import { Button } from '../../../../common/components/Button';
import { loginUser } from '../../../authSlice';
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
        navigate('/profile')
    }

    return (
        <div className="bg-gray-100 h-screen flex flex-col items-center justify-center">
            <form className="bg-white rounded h-auto p-4" onSubmit={handleLogin}>
                <h2 className="text-4xl font-bold tracking-wide subpixel-antialiased pb-4">Farmbook</h2>
                <div className="pb-2 font-medium text-opacity-40 text-base text-gray-700">Login to see posts from your friends.</div>
                <div className="my-3">
                    <Input
                        id="email"
                        placeholder="Enter your Email"/>
                </div>
                <div className="my-3">
                    <Input
                        id="password"
                        placeholder="Enter your password" 
                        autocomplete="off"/>
                </div>
                <div className="text-red-500 text-sm font-semibold">{error}</div>
                <div className="pt-6">
                    <Button text="Login" type="submit"/>
                </div>
            </form>
        </div>
    )
}

export default Login;