import {useSelector} from "react-redux";

export const UserPosts = () => {
    const userPost = useSelector((state) => state.post.userPostList)

    return(
        <div className="cards-list mt-8">
            {userPost?.map((post) => {
                return (
                    <div className="card" key={post._id}>
                        <div className="card_box"> </div>
                        <div className="card_text title-black">
                            <p>{post?.content}</p>
                        </div>
                    </div>
                    );
                })}
        </div>
    )
}