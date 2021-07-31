import { FollowUsers } from "../../../common/components/FollowUser"
import { Button } from "../../../common/components/Button"
import { postTweet } from "../postSlice"

export const Feed = () => {
    return(
        <div>
            <div className="flex justify-center">FEED PAGE</div>
            <div className="follow__users--container mr-8 mt-12">
                <FollowUsers />
            </div>
            <div className="flex justify-end pt-4 mt-4 mr-8">
                <Button text="Post" type="submit" callback={postTweet} />
            </div>
        </div>
    )
}