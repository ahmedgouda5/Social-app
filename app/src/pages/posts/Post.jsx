import Cart from "../../components/cart/Cart";
import "./Post.css";

const Post = () => {
  return (
    <div className="posts pt-4  w-svw flex justify-start items-center flex-col gap-4 ">
      <div className="header h-fit  flex flex-col  bg-white p-4 ">
        <div className=" header_icon cursor-pointer flex gap-5 justify-between p-3  ">
          <div className="flex items-center gap-3">
            <div className="icon flex  bg-yellow-200 py-2 px-2 rounded-full ">
              <i className="text-sm fa-solid fa-pen-to-square "></i>
            </div>
            <h4>write post</h4>
          </div>
          <div className="flex items-center gap-3">
            <div className="icon flex  bg-yellow-200 py-2 px-2 rounded-full ">
              <i className="fa-solid fa-image"></i>{" "}
            </div>
            <h4>Upload Photo</h4>
          </div>
          <div className="flex items-center gap-3">
            <div className="icon flex  bg-yellow-200 py-2 px-2 rounded-full ">
              <i className="fa-solid fa-cloud-arrow-up"></i>{" "}
            </div>
            <h4>Upload Photo</h4>
          </div>
        </div>
        <div className=" h-20 p-3 textArea cursor-text">
          <i className="text-sm fa-solid fa-pen-to-square "></i>
          <span> Right something here...</span>
        </div>
      </div>
      <div className="posts h-fit  flex flex-col   p-4  ">
        <Cart/>
      </div>
    </div>
  );
};

export default Post;
