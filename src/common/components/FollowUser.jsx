import {useDispatch, useSelector} from "react-redux";
import { getFollowSuggetions } from "../../features/authSlice";
import { useEffect } from "react";

export const FollowUsers = () => {
    const dispatch = useDispatch(); 
    const followProfiles = useSelector((state) => state.auth.followUsers)

    useEffect(() => { 
        dispatch(getFollowSuggetions()) // eslint-disable-next-line
    }, [])
    return(
        <div>
            <ul className="videos-container">
                {followProfiles.map((userProfile) => {
                return (
                    <>
                        <ul>
                            <li>@{userProfile?.username}</li>
                            <li>@{userProfile?.bio}</li>
                            <li><img src={userProfile?.profileURL} alt="profile url" className="rounded-full w-10 h-10 cursor-pointer overflow-hidden" /></li>
                        </ul>
                    </>
                    );
                })}
            </ul>
        </div>
    )
}