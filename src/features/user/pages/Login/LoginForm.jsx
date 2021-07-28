import {useState} from 'react';

export const Login = () => {
    // eslint-disable-next-line
    let [loginEmail, setLoginEmail] = useState(''); // eslint-disable-next-line
    let [loginPassword, setLoginPassword] = useState(''); 

    const handleLogin = (e) => {
        e.preventDefault();
    }

    return (
        <div>
            <form onSubmit={handleLogin}>
                <label htmlFor="email">Email</label>
                <input className="text-sm" type="text" name="Email" placeholder="Email"  onChange={(e) => setLoginEmail(e.target.value)} required/>
                <label htmlFor="password">Password</label>
                <input className="text-sm" type="password" name="Password" placeholder="Password" onChange={(e) => setLoginPassword(e.target.value)} required/>
                <button>Sign up</button>
            </form>
            <div></div>
        </div>
    )
}

export default Login;