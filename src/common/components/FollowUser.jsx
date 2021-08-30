import { useDispatch, useSelector } from "react-redux";
import { getFollowSuggetions } from "../../features/user/authSlice";
import { useEffect } from "react";
import { useNavigate } from "react-router";
import Loading from "../assets/loading.gif";

export const FollowUsers = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const followProfiles = useSelector((state) => state.auth.followUsers);
  const token = useSelector((state) => state.auth.token);
  const loading = useSelector((state) => state.auth.isUserLoading);

  useEffect(() => {
    if (loading === false) {
      dispatch(getFollowSuggetions(token));
    } // eslint-disable-next-line
  }, [dispatch, token]);

  return (
    <div className="flex px-4 border mt-4 border-gray-600 rounded-md p-2 w-1/4 flex-col h-auto follow_users">
      <div className="mt-2 mb-4 text-gray-600 uppercase tracking-wide font-semibold font-mono">
        Welcome new FarmBook users!
      </div>
      {loading === true ? (
        <div className="ml-32">
          <img src={Loading} alt="loading" height="30px" width="30px" />
        </div>
      ) : (
        <ul>
          {Array.isArray(followProfiles) ? (followProfiles?.map((userProfile) => {
            return (
              <div
                key={userProfile?._id}
                className="flex items-center cursor-pointer"
                onClick={() => {
                  navigate(`/follow/${userProfile.username}`);
                }}
              >
                <ul className="mb-4 mr-8">
                  <div className="ml-4 flex-col pb-4">
                    <li className="font-semibold ml-12">{userProfile?.name}</li>
                    <li className="text-gray-400 -mt-1 ml-12">
                      @{userProfile?.username}
                    </li>
                  </div>
                  <li>
                    <img
                      src={userProfile?.profileURL}
                      alt="profile url"
                      className="rounded-full w-10 h-10 -mt-14 cursor-pointer overflow-hidden"
                    />
                  </li>
                </ul>
              </div>
            );
          })) : (<div><strong>Server Down!</strong></div>)
          }
        </ul>
      )}
    </div>
  );
};
