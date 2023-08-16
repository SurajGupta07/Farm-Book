import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useNavigate, useParams } from "react-router";
import { getAllUserCreatedPosts } from "../../features/post/postSlice";
import { UserPosts } from "./UserPosts";
import { logOutUser } from "../../features/user/authSlice";

export const UserProfile = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { username } = useParams();
  const profile = useSelector((state) => state.auth.data);
  const token = useSelector((state) => state.auth.token);

  useEffect(() => {
    dispatch(getAllUserCreatedPosts({ username, token }));
  }, [dispatch, username, token]);

  return (
    <div className="items-center mt-6 justify-center flex flex-col">
      <div className="flex items-center mt-2">
        <div>
          <img
            src={profile?.profileURL}
            alt="user profile"
            className="rounded-full w-14 h-14 overflow-hidden"
          />
        </div>
        <div className="ml-8 flex-col">
          <div className="font-semibold">{profile?.name}</div>
          <div className="text-gray-400 -mt-1">@{profile?.username}</div>
        </div>
      </div>
      <div className="mt-6 rounded md:mx-16">{profile?.bio}</div>
      <div
        className="flex gap-12 mt-6"
        onClick={() => navigate(`/${username}/network`)}
      >
        <div className="flex flex-col cursor-pointer items-center justify-center">
          <div className="font-semibold">{profile?.followersList?.length}</div>
          <div className="text-gray-600 -mt-1">Followers</div>
        </div>
        <div className="flex cursor-pointer flex-col items-center justify-center">
          <div className="font-semibold">{profile?.followingList?.length}</div>
          <div className="text-gray-600 -mt-1">Following</div>
        </div>
      </div>
      <div className="pointer-events">
        <button
          onClick={() => {
            dispatch(logOutUser());
            navigate("/login");
          }}
          className="rounded h-10 md:h-12 w-20 md:w-28 md:text-xl flex justify-center items-center bg-blue-500 font-bold text-white shadow-lg"
        >
          Logout
        </button>
      </div>
      <UserPosts />
    </div>
  );
};
