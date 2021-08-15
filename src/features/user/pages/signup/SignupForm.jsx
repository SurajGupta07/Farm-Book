import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { Input } from "../../../../common/components/Input";
import { Button } from "../../../../common/components/Button";
import { signupUser } from "../../authSlice";
import { useNavigate } from "react-router";

export const Signup = () => {
  let [error, setError] = useState("");
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const loggedIn = useSelector((state) => state.auth.isUserLoggedIn);

  useEffect(() => {
    if (loggedIn === true) {
      navigate("/");
    } // eslint-disable-next-line
  }, [loggedIn, navigate]);

  const handleSignUp = (e) => {
    e.preventDefault();
    let name = e.currentTarget[0].value.trim();
    const username = e.currentTarget[1].value.trim();
    const email = e.currentTarget[2].value.trim();
    const password = e.currentTarget[3].value.trim();
    if (name === "" || username === "" || email === "" || password === "") {
      setError("Please enter valid details");
    }
    dispatch(signupUser({ name, username, email, password }));
  };

  return (
    <div className="bg-gray-100 h-screen flex flex-col items-center justify-center">
      <form className="bg-white rounded h-auto p-4" onSubmit={handleSignUp}>
        <h2 className="text-4xl font-bold tracking-wide subpixel-antialiased pb-4">
          Farmbook
        </h2>
        <div className="pb-2 font-medium text-opacity-60 text-base text-gray-700">
          Sign up to see posts from your friends.
        </div>
        <div className="my-3">
          <Input id="name" placeholder="Enter your Name" />
        </div>
        <div className="my-3">
          <Input id="username" placeholder="Enter your Username" />
        </div>
        <div className="my-3">
          <Input id="email" placeholder="Enter your Email" />
        </div>
        <div className="my-3">
          <Input
            id="password"
            placeholder="Enter your password"
            autocomplete="off"
          />
        </div>
        <div className="text-red-500 text-sm font-semibold">{error}</div>
        <div className="pt-6">
          <Button text="SIGN UP" type="submit" />
        </div>
        <div className="pt-5">
          <span className="text-base text-gray-600">
            Already have an Account?
          </span>{" "}
          <Link to="/login" className="text-blue-600">
            Signin
          </Link>
        </div>
      </form>
    </div>
  );
};

export default Signup;
