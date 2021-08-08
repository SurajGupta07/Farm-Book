import {useEffect} from "react";
import {useParams} from "react-router";
import {useDispatch, useSelector} from "react-redux";
import {getUserNetwork} from "../../features/user/authSlice";

export const Network = () => {
    const network = useSelector((state) => state.auth.userNetwork)
    const {username} = useParams();
    const dispatch = useDispatch();
    const token = useSelector((state) => state.auth.token)

    useEffect(() => {
        dispatch(getUserNetwork({username, token})) // eslint-disable-next-line
    }, [username])

    return (
        <div className="network__tab">
            <div className="network_list">
                Following {network?.followingList}
            </div>
            <div className="network_list">
                Followers {network?.followersList}
            </div>
        </div>
    )
}