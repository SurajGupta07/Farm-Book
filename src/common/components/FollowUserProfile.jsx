import { useEffect } from "react";
import {useSelector, useDispatch} from "react-redux";
import { useNavigate, useParams } from "react-router";
import { getCurrentUserData } from "../../features/user/authSlice";
import { Button } from "./Button";

export const FollowUserProfile = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const {username} = useParams();
    const followProfile = useSelector((state) => state.auth.followUser);
    const token = useSelector((state) => state.auth.token);

    useEffect(() => {
        dispatch(getCurrentUserData(username, token))
    }, [username])

    const handleFollow = () => {
        console.log('following')
    }

    return(
        <div className="items-center mt-6 justify-center flex flex-col">
            <div className="flex items-center mt-2">
                <div>
                    <img src={followProfile?.profileURL} alt="user profile" className="rounded-full w-14 h-14 overflow-hidden"/>
                </div>
                <div className="ml-8 flex-col">
                    <div className="font-semibold">{followProfile?.name}</div>
                    <div className="text-gray-400 -mt-1">@{followProfile?.username}</div>
                </div>
                <div className="ml-8">
                   <Button text='Follow' onClick={handleFollow} />
                </div>
            </div>
            <div className="mt-6 rounded md:mx-16">{followProfile?.bio}</div>
            <div className="flex gap-12 mt-6" onClick={() => navigate('/network')}>
                <div className="flex flex-col cursor-pointer items-center justify-center">
                    <div className="font-semibold">{followProfile?.followersList?.length}</div>
                    <div className="text-gray-600 -mt-1">Followers</div>
                </div>
                <div className="flex cursor-pointer flex-col items-center justify-center">
                    <div className="font-semibold">{followProfile?.followingList?.length}</div>
                    <div className="text-gray-600 -mt-1">Following</div>
                </div>
            </div>
            {/* <UserPosts /> */}
        </div>
    )
}