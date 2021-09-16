import { useSelector, useDispatch } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import home from "../assets/home.png";
import logout from "../assets/logout.png";
import { logOutUser } from "../../features/user/authSlice";

export const Header = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const profileURL = useSelector((state) => state.auth.data.profileURL);
  const username = useSelector((state) => state.auth.data.username);
  let token = localStorage.getItem("login");
  return (
    <header>
      <div className="flex shadow-lg h-auto w-screen bg-gray-300">
        <h1 className="flex py-4 pl-4 text-4xl font-bold tracking-wide leading-snug text-gray-700">
          <Link to="/">FARMBOOK</Link>
        </h1>
        <div className="flex gap-8 items-center links_container">
          {token && (
            <Link to="/">
              <img className="h-7" alt="home" src={home} />
            </Link>
          )}
          {token && (
            <div
              onClick={() => navigate(`/profile/${username}`)}
              className="cursor-pointer"
            >
              <img className="h-7" alt="profile" src={profileURL} />
            </div>
          )}
          {token && (
            <button
              onClick={() => {
                dispatch(logOutUser());
                navigate("/login");
              }}
            >
              <img className="h-7" alt="logout" src={logout} />
            </button>
          )}
        </div>
      </div>
    </header>
  );
};
