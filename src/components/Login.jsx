import {useState} from 'react';

export const Login = () => {

    let [loginEmail, setLoginEmail] = useState('');
    let [loginPassword, setLoginPassword] = useState('');

    const handleLogin = (e) => {
        e.preventDefault();
        console.log(loginEmail, loginPassword);
    }

    return (
        <div>
            <form onSubmit={handleLogin}>
                <label htmlFor="email">Email</label>
                <input type="text" name="Email" placeholder="Email"  onChange={(e) => setLoginEmail(e.target.value)} required/>
                <label htmlFor="password">Password</label>
                <input type="password" name="Password" placeholder="Password" onChange={(e) => setLoginPassword(e.target.value)} required/>
                <button>Sign up</button>
            </form>
            <div></div>
        </div>
    )
}

export default Login;