import axios from "axios";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Button } from "../../../../common/components/Button";
import { postTweet } from "../../postSlice";

export const CreateNewPost = ({ setCreatePost, setShowList, setShowPosts }) => {
  let [content, setContent] = useState("");
  const dispatch = useDispatch();
  const userId = useSelector((state) => state.auth.data._id);
  let token = useSelector((state) => state.auth.token);
  const [image, setImage] = useState("");
  const [imageURL, setImageURl] = useState("");

  const postOnClick = (e) => {
    e.preventDefault();
    if (imageURL !== "" || undefined || null){
      dispatch(postTweet({ content, userId, token, imageURL }));
      setCreatePost(false);
      setShowList(true);
      setShowPosts(true); 
    }
  };

  const uploadHander = async (e) => {
    e.preventDefault();
    if (!image) {
      console.log("Image is required");
    }

    const data = new FormData();
    data.append("file", image);
    data.append("upload_preset", "Farmbook");
    data.append("cloud_name", "farmbook07");

    try {
      const response = await axios.post(
        "https://api.cloudinary.com/v1_1/farmbook07/image/upload",
        data
      );
      setImageURl(response.data.secure_url);
      return response.data;
    } catch (error) {
      console.error("error occured while uploading the image: ", {error});
    }
  };

  return (
    <div className="fixed h-screen w-screen bg-gray-200 bg-opacity-98 flex justify-center">
      <div className="relative w-full h-3/4 p-4 pt-8 mt-8 md:max-w-md md:m-auto md:mt-8">
        <div className="p-2 text-lg inline-flex">What's happening?</div>
        <button
          className="ml-36 mb-8 rounded h-10 w-20 flex justify-center items-center bg-blue-500 font-bold text-white inline-flex"
          onClick={() => {
            setCreatePost(false);
            setShowList(true);
            setShowPosts(true);
          }}
        >
          Close
        </button>
        <div className="relative">
          <textarea
            onChange={(e) => setContent(e.target.value)}
            className="p-3 w-full h-48 flex-1 appearance-none border border-transparent bg-white text-gray-700 placeholder-gray-400 shadow-md rounded focus:outline-none focus:ring-2 focus:ring-blue-400 focus:border-transparent text-lg"
          ></textarea>
          <div>
            <input
              type="file"
              onChange={(e) => {
                setImage(e.target.files[0]);
              }}
            />
            <button
              onClick={(e) => uploadHander(e)}
              className="rounded h-10 w-20 flex justify-center items-center bg-blue-500 font-bold text-white shadow-lg disabled:opacity-80 mt-2"
            >
              UPLOAD
            </button>
          </div>
          <div className="absolute  bg-white shadow-xl px-2 rounded-md text-red-600 font-bold">
            {content.length}/200
          </div>
        </div>
        <div className="flex justify-end pt-2 mt-3">
          <Button text="Shoot" callback={(e) => postOnClick(e)} />
        </div>
      </div>
    </div>
  );
};
