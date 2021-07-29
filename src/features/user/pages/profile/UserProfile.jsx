import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { getCurrentUserData, getUserProfile } from "../../../authSlice";
import { Header } from "../../../../common/components/Header";

export const UserProfile = () => {
    const profile = useSelector((state) => state.auth.data);
    console.log(profile, 'user profile')
    const { userName } = useParams();
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getCurrentUserData({ userName }))
    }, [userName])

    return (
        <div>
            {/* <Header /> */}
            <div className="flex items-center ml-8 mt-2">
                <div className="">
                    <img src="abc.com" className="rounded-full w-14 h-14 overflow-hidden" />
                </div>
                <div className="ml-4 flex-col">
                    <div className="font-semibold">{profile.name}</div>
                    <div className="text-gray-400 -mt-1">{profile.username}</div>
                </div>
            </div>
        </div>
    )
}