import { Outlet } from "react-router-dom";
import Navbar from "../../components/navbar/Navbar";
const Layout = () => {
  return (
    <>
      <div className="fixed right-0 left-0 z-10  ">
        <Navbar />
      </div>
      <div className=" bg-slate-400 min-h-screen pt-[60px] pb-[30px]">
        <Outlet />
      </div>
    </>
  );
};

export default Layout;
