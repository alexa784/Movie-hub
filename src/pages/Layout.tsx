import { Outlet } from "react-router-dom";
import NavBar from "../components/NavBar";
import Notifications from "../components/Notifications";

const Layout = () => {
  return (
    <>
      <Notifications />
      <NavBar />
      <Outlet />
    </>
  );
};

export default Layout;
