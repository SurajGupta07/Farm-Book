import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { logOutUser } from "../../../features/user/authSlice";
import home from "../../assets/home.png";
import logout from "../../assets/logout.png";
import "./headerStyles.css";

export const Header = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const profileURL = useSelector((state) => state.auth.data.profileURL);
  const username = useSelector((state) => state.auth.data.username);
  let token = localStorage.getItem("login");
  return (
    <div className="header-container">
      <div>
        <h1 className="header-text">FarmBook</h1>
      </div>

      <div className="action-container">
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
  );
};
