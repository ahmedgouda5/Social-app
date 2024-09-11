import "./Aside.css";
import img1 from "../images/Rectangle 10.png";
import img2 from "../images/Rectangle 8.png";
import img3 from "../images/Ellipse 1.png";
import img4 from "../images/Ellipse 2.png";
import dog from '../images/Rectangle 11.png'
const AsideRight = () => {
  return (
    <aside className="flex flex-col px-2 py-3">
      <h1 className="text-xl text-red-400">People you may know</h1>
      <div >
        <div className="border-b-2 pb-2">
          <div className="flex  items-start gap-2 py-2">
            <img src={img1} alt="" />
            <div>
              <h4 className="text-lg font-mono ">Tony Stark</h4>
              <p className="font-sans text-xs">
                I am a metal man, who saves lots..
              </p>
              <span className="text-blue-700 font-extralight text-s">
                6M+ Followers
              </span>
            </div>
          </div>
          <div className="flex  items-start gap-2 py-2">
            <img src={img2} alt="" />
            <div>
              <h4 className="text-lg font-mono ">Bruce Banners</h4>
              <p className="font-sans text-xs">
                Green human with scietific kno....
              </p>
              <span className="text-blue-700 font-extralight text-s">
                3M+ Followers
              </span>
            </div>
          </div>
        </div>
        <div>
          <div className="flex  items-start gap-2 py-2">
            <img src={img3} alt="" />
            <div>
              <h4 className="text-md  font-semibold ">Natasha Ramanoff</h4>
              <p className="font-sans text-xs">
                Tagged you in her 250th post a..
              </p>
            </div>
          </div>
          <div className="flex  items-start gap-2 py-2">
            <img src={img4} alt="" />
            <div>
              <h4 className="text-md  font-semibold ">Barton Clint</h4>
              <p className="font-sans text-xs">
                Liked your comment on their po...
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="pt-3 flex flex-col gap-2">
        <h1 className="text-xl text-red-400">Boost your post</h1>
        <img src={dog} alt="" />
        <p><span className="text-lg text-black">@steve_rogers </span>With my lovable <br />dog named Bruno with a smile &....</p>
      </div>
    </aside>
  );
};

export default AsideRight;
