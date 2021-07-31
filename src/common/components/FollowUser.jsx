import {useDispatch, useSelector} from "react-redux";
import { getFollowSuggetions } from "../../features/user/authSlice";
import { useEffect } from "react";
import { useNavigate } from "react-router";

export const FollowUsers = () => {
    const dispatch = useDispatch(); 
    const navigate = useNavigate();
    const followProfiles = useSelector((state) => state.auth.followUsers);
    const userId = useSelector((state) => state.auth.data._id)

    useEffect(() => { 
        dispatch(getFollowSuggetions()) // eslint-disable-next-line
    }, [])
    return(
        <div className="flex px-4 border mt-4 border-gray-600 rounded-md p-2 w-1/4 flex-col h-auto">
            <div className="mt-2 mb-4 text-gray-600 uppercase tracking-wide font-semibold font-mono">Welcome new FarmBook users!</div>
            <ul>
                {followProfiles.map((userProfile) => {
                return (
                    <div className="flex items-center cursor-pointer" 
                    onClick = {() => {
                        navigate(`/profile/${userId}`);
                    }}>
                        <ul className="mb-4 mr-8">
                            <div className="ml-4 flex-col pb-4">
                                <li className="font-semibold ml-12">{userProfile?.name}</li>
                                <li className="text-gray-400 -mt-1 ml-12">@{userProfile?.username}</li>
                            </div>
                            <li><img src={userProfile?.profileURL} alt="profile url" className="rounded-full w-10 h-10 -mt-14 cursor-pointer overflow-hidden" /></li>
                        </ul>
                    </div>
                    );
                })}
            </ul>
        </div>
    )
}