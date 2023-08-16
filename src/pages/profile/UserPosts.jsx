import { useSelector } from "react-redux";
import Loading from "../../common/assets/loading.gif";

export const UserPosts = () => {
  const userPost = useSelector((state) => state.post.userPostList);
  var loading = useSelector((state) => state.post.postLoading);
  return (
    <div className="cards-list mt-8">
      {loading === true ? (
        <div className="ml-32">
          <img src={Loading} alt="loading" height="30px" width="30px" />
        </div>
      ) : (
        <div>
          {userPost?.map((post) => {
            return (
              <div className="card" key={post._id}>
                <div className="card_box"> </div>
                <div className="card_text title-black">
                  <img
                    className="h-60 w-96 pt-12"
                    src={post?.postImage}
                    alt="post-img"
                  />
                  <p className="pt-8">{post?.content}</p>
                  <p className="pt-4">{post?.likedBy?.length} likes</p>
                </div>
              </div>
            );
          })}
        </div>
      )}
    </div>
  );
};
