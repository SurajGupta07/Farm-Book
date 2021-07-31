import {useState} from "react"
import {FollowUsers} from "../../../../common/components/FollowUser"
import { CreateNewPost } from "./CreateNewPost";

export const Feed = () => {
    const [createPost, setCreatePost] = useState(false);
    const [showList, setShowList] = useState(true);
    return (
        <div>
            <div className="follow__users--container mr-8">
                {showList && (
                    <FollowUsers />
                )}
            </div>
            {!createPost && (
                <div className="fixed bottom-6 md:right-96 -mr-2 md:bottom-20">
                    <button
                        onClick={() => {
                            setCreatePost(true) 
                            setShowList(false)
                        }}
                        className="rounded h-10 md:h-12 w-20 md:w-28 md:text-xl flex justify-center items-center bg-blue-500 font-bold text-white shadow-lg disabled:opacity-80">
                        Post
                    </button>
                </div>
            )}
            {createPost && (
                <CreateNewPost setCreatePost={setCreatePost} setShowList={setShowList} />
            )}
        </div>
    )
}