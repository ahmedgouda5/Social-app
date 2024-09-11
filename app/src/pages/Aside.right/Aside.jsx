import img from "../images/Ahmed.png";
import "./Aside.css";
import { useNavigate } from 'react-router-dom';
const AsideLeft = () => {
  const navigate=useNavigate()
  return (
    <aside className="flex px-5 justify-evenly flex-col w-full py-3">
      <div className="flex justify-center flex-col items-center">
        <img src={img} alt="Ahmed gouda" className="w-20" />{" "}
        <h1 className="uppercase text-xl ">ahmed gouda</h1>
      </div>
      <div>
        <h2 className="text-2xl text-red-400 pb-2">Explore panel</h2>
        <ul className="text-lg">
          <li>
            <i className="fa-solid fa-user text-red-950"></i>{" "}
            <span className="p-2">profile</span>
          </li>
          <li>
            <i className="fa-solid fa-people-group text-red-950"></i>
            <span className="p-2">find friends</span>
          </li>
          <li>
            <i className="fa-solid fa-database text-red-950"></i>
            <span className="p-2">User analytics</span>
          </li>
        </ul>
      </div>
      <div>
        <h2 className="text-2xl text-red-400 pb-2">Settings</h2>
        <ul className="text-lg">
          <li>
            <i className="fa-solid fa-gear text-red-950"></i>{" "}
            <span className="p-2">Settings</span>
          </li>
          <li>
            <i className="fa-solid fa-shield-heart text-red-950"></i>
            <span className="p-2">security</span>
          </li>
          <li onClick={()=>navigate("/")} className="cursor-pointer">
            <i className="fa-solid fa-right-from-bracket text-red-950"></i>
            <span className="p-2">log out</span>
          </li>
        </ul>
      </div>
    </aside>
  );
};

export default AsideLeft;
