import {useEffect} from "react";
import {useState} from "react"
import {FollowUsers} from "../../../../common/components/FollowUser"
import {CreateNewPost} from "./CreateNewPost";
import {useDispatch, useSelector} from "react-redux";
import {getFeed} from "../../postSlice";
import Loading from "../../../../common/assets/loading.gif"
import {likePost} from "../../postSlice";
import { unlikePost } from "../../postSlice";

export const Feed = () => {
    const dispatch = useDispatch();
    const [createPost,
        setCreatePost] = useState(false);
    const [showList,
        setShowList] = useState(true);
    const [showPosts,
        setShowPosts] = useState(true);
    let token = useSelector((state) => state.auth.token);
    let posts = useSelector((state) => state.post.feedPost);
    let loading = useSelector((state) => state.post.postLoading);
    let userId = useSelector((state) => state.auth.data._id);
    useEffect(() => {
        dispatch(getFeed(token)) // eslint-disable-next-line
    }, [dispatch, token])

    return (
        <div>
            <div className="follow__users--container mr-8">
                {showList && (<FollowUsers/>)}
            </div>
            {!createPost && (
                <div className="fixed bottom-6 md:right-96 -mr-2 md:bottom-20">
                    <button
                        onClick={() => {
                        setCreatePost(true)
                        setShowList(false)
                        setShowPosts(false)
                    }}
                        className="rounded h-10 md:h-12 w-20 md:w-28 md:text-xl flex justify-center items-center bg-blue-500 font-bold text-white shadow-lg disabled:opacity-80">
                        Post
                    </button>
                </div>
            )}
            {showPosts && <div>
                <div>
                    {posts
                        ?.map((post) => {
                            return (
                                <div className="centeradiv" key={post._id}>
                                    {loading === true
                                        ? (
                                            <div className="ml-32"><img src={Loading} alt="loading" height='200px' width='200px'/>
                                            </div>
                                        )
                                        : (
                                            <div className="card">
                                                <div className="card_box"></div>
                                                <div className="card_text title-black">
                                                    <p className="text-2xl pl-12 font-semibold">@{post
                                                            ?.userId
                                                                ?.username}</p>
                                                    <p className="text-xl pl-12">{post
                                                            ?.userId
                                                                ?.name}</p>
                                                    <img
                                                        className="-mt-12 pb-8"
                                                        src={post
                                                        ?.userId
                                                            ?.profileURL}
                                                        alt="post list"
                                                        height="40px"
                                                        width="40px"/>
                                                    <p>{post
                                                            ?.content}</p>
                                                    <p>{post
                                                            ?.likedBy
                                                                ?.length}</p>
                                                    {post
                                                        ?.likedBy
                                                            ?.includes(userId)
                                                                ? <button
                                                                        onClick={(e) => {
                                                                        e.preventDefault();
                                                                        let postId = post._id 
                                                                        dispatch(unlikePost({postId, userId}))
                                                                    }}
                                                                        className="rounded h-10 w-20 flex justify-center items-center bg-blue-500 text-white shadow-lg">Unlike</button>

                                                                : <button
                                                                    onClick={(e) => {
                                                                    e.preventDefault();
                                                                    let postId = post._id 
                                                                    dispatch(likePost({postId, userId}))
                                                                }}
                                                                    className="rounded h-10 w-20 flex justify-center items-center bg-blue-500 text-white shadow-lg">Like</button>
                                                    }
                                                </div>
                                            </div>
                                        )}
                                </div>
                            );
                        })}
                </div>
            </div>}
            {createPost && (<CreateNewPost
                setCreatePost={setCreatePost}
                setShowList={setShowList}
                setShowPosts={setShowPosts}/>)}
        </div>
    )
}