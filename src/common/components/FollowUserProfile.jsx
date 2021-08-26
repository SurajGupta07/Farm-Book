import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useNavigate, useParams } from "react-router";
import {
  getCurrentUserData,
  addFollowUser,
  removeFollowing
} from "../../features/user/authSlice";
import { Button } from "./Button";

export const FollowUserProfile = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  var { username } = useParams();
  const followProfile = useSelector((state) => state.auth.followUser);
  const followUserId = useSelector((state) => state.auth.followUser._id)
  var token = useSelector((state) => state.auth.token);
  const userId = useSelector((state) => state.auth.data._id);
  useEffect(() => {
    dispatch(getCurrentUserData(username, token)); // eslint-disable-next-line
  }, [username]);

  const handleFollow = (e) => {
    e.preventDefault();
    dispatch(addFollowUser({ followUserId, userId }));
  };

  const handleUnFollow = (e) => {
    e.preventDefault();
    dispatch(removeFollowing({followUserId, userId}))
  }

  return (
    <div className="items-center mt-6 justify-center flex flex-col">
      <div className="flex items-center mt-2">
        <div>
          <img
            src={followProfile?.profileURL}
            alt="user profile"
            className="rounded-full w-14 h-14 overflow-hidden"
          />
        </div>
        <div className="ml-8 flex-col">
          <div className="font-semibold">{followProfile?.name}</div>
          <div className="text-gray-400 -mt-1">@{followProfile?.username}</div>
        </div>
        <div className="ml-8">
          {followProfile?.followersList?.includes(userId) ? <Button text="Unfollow" callback={handleUnFollow}/> : <Button text="Follow" callback={handleFollow} />}
        </div>
      </div>
      <div className="mt-6 rounded md:mx-16">{followProfile?.bio}</div>
      <div className="flex gap-12 mt-6" onClick={() => navigate("/network")}>
        <div className="flex flex-col cursor-pointer items-center justify-center">
          <div className="font-semibold">
            {followProfile?.followersList?.length}
          </div>
          <div className="text-gray-600 -mt-1">Followers</div>
        </div>
        <div className="flex cursor-pointer flex-col items-center justify-center">
          <div className="font-semibold">
            {followProfile?.followingList?.length}
          </div>
          <div className="text-gray-600 -mt-1">Following</div>
        </div>
      </div>
    </div>
  );
};
