import {useState} from 'react';

const Signup = () => {

    let [signupEmail, setSignupEmail] = useState('');
    let [signupPassword, setSignupPassword] = useState('');

    const handleSignUp = (e) => {
        e.preventDefault();
        console.log(signupEmail, signupPassword);
    }

    return (
        <div>
            <form onSubmit={handleSignUp}>
                <label htmlFor="email">Email</label>
                <input type="text" name="Email" placeholder="Email"  onChange={(e) => setSignupEmail(e.target.value)} required/>
                <label htmlFor="password">Password</label>
                <input type="password" name="Password" placeholder="Password" onChange={(e) => setSignupPassword(e.target.value)} required/>
                <button>Sign up</button>
            </form>
        </div>
    )
}

export default Signup;