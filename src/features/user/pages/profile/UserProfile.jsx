import {useParams} from "react-router-dom";
import {useDispatch, useSelector} from "react-redux";
import {useEffect} from "react";
import {getCurrentUserData} from "../../../authSlice";
import { useNavigate } from "react-router";

export const UserProfile = () => {
    const navigate = useNavigate();
    const profile = useSelector((state) => state.auth.data);
    const {userName} = useParams();
    const dispatch = useDispatch(); 

    useEffect(() => { 
        dispatch(getCurrentUserData({userName})) // eslint-disable-next-line
    }, [userName])

    return (
        <div>
            <div className="flex items-center ml-8 mt-2">
                <div>
                    <img src={profile.profileURL} alt="user profile" className="rounded-full w-14 h-14 overflow-hidden"/>
                </div>
                <div className="ml-4 flex-col">
                    <div className="font-semibold">{profile.name}</div>
                    <div className="text-gray-400 -mt-1">@{profile.username}</div>
                </div>
            </div>
            <div className="ml-2 mt-4 pt-4 rounded md:mx-16">{profile.bio}</div>
            <div className="flex gap-12 ml-12 mt-4" onClick={() => navigate('/network')}>
                <div className="flex flex-col cursor-pointer items-center justify-center">
                    <div className="font-semibold">{profile?.followersList?.length}</div>
                    <div className="text-gray-600 -mt-1">Followers</div>
                </div>
                <div className="flex cursor-pointer flex-col items-center justify-center">
                    <div className="font-semibold">{profile?.followingList?.length}</div>
                    <div className="text-gray-600 -mt-1">Following</div>
                </div>
            </div>
        </div>
    )
}