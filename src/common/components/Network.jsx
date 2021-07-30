import {useEffect} from "react";
import {useParams} from "react-router";
import {useDispatch, useSelector} from "react-redux";
import {getUserNetwork} from "../../features/authSlice";

export const Network = () => {
    const network = useSelector((state) => state.auth.userNetwork)
    const {username} = useParams();
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getUserNetwork({username})) // eslint-disable-next-line
    }, [username])

    return (
        <div>
            <div>
                Following {network.followingList}
            </div>
            <div>
                Followers {network.followersList}
            </div>
        </div>
    )
}