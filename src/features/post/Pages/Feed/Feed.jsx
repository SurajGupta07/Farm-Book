import { useEffect, useState } from "react";
import { FollowUsers } from "../../../../common/components/FollowUser";
import { CreateNewPost } from "./CreateNewPost";
import { useDispatch, useSelector } from "react-redux";
import { getFeed } from "../../postSlice";
import Loading from "../../../../common/assets/loading.gif";
import { likePost } from "../../postSlice";
import { unlikePost } from "../../postSlice";

export const Feed = () => {
  const dispatch = useDispatch();
  const [createPost, setCreatePost] = useState(false);
  const [showList, setShowList] = useState(true);
  const [showPosts, setShowPosts] = useState(true);
  let token = useSelector((state) => state.auth.token);
  let posts = useSelector((state) => state.post.feedPost);
  let loading = useSelector((state) => state.post.postLoading);
  let userId = useSelector((state) => state.auth.data._id);

  useEffect(() => {
    dispatch(getFeed(token)); // eslint-disable-next-line
  }, [dispatch, token]);

  return (
    <div>
    {loading === true ? (
      <div className="ml-96 mt-56">
        <img
          src={Loading}
          alt="loading"
          height="200px"
          width="200px"
        />
      </div>
    ) : (
    <div>
      <div className="follow__users--container mr-8">
        {showList && <FollowUsers />}
      </div>
      {!createPost && (
        <div className="button-post">
          <button
            onClick={() => {
              setCreatePost(true);
              setShowList(false);
              setShowPosts(false);
            }}
            className="rounded h-12 w-28 text-xl justify-center items-center bg-blue-500 font-bold text-white shadow-lg"
          >
            Post
          </button>
        </div>
      )}
      {showPosts && (
        <div>
          <div>
            {posts?.map((post) => {
              return (
                <div className="centeradiv" key={post._id}>
                  
                    <div className="card">
                      <div className="card_box"></div>
                      <div className="card_text title-black">
                        <p className="text-2xl pl-12 font-semibold">
                          @{" "}{post?.userId?.username}
                        </p>
                        <p className="text-xl pl-12">{post?.userId?.name}</p>
                        <img
                          className="-mt-12 pb-8"
                          src={post?.userId?.profileURL}
                          alt="post list"
                          height="40px"
                          width="40px"
                        />
                        <img className="h-60 w-96" src={post?.postImage} alt="post-img"/>
                        <p className="pr-8">{post?.content}</p>
                        <p className="pt-2">{post?.likedBy?.length} likes</p>
                        {post?.likedBy?.includes(userId) ? (
                          <button
                            onClick={(e) => {
                              e.preventDefault();
                              let postId = post._id;
                              dispatch(unlikePost({ postId, userId }));
                            }}
                            className="fa fa-thumbs-up text-4xl opacity-50 action--button outline-none"
                          ></button>
                        ) : (
                          <button
                            onClick={(e) => {
                              e.preventDefault();
                              let postId = post._id;
                              dispatch(likePost({ postId, userId }));
                            }}
                            className="fa fa-thumbs-up text-4xl action--button outline-none"
                          ></button>
                        )}
                      </div>
                    </div>
                </div>
              );
            })}
          </div>
        </div>
      )}
      {createPost && (
        <CreateNewPost
          setCreatePost={setCreatePost}
          setShowList={setShowList}
          setShowPosts={setShowPosts}
        />
      )}
    </div>
    )}
    </div>
  );
};
