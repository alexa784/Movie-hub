import { Stack, Image } from "react-bootstrap";
import logo from "../assets/logo.webp";
import ColorModeSwitch from "./ColorModeSwitch";

const NavBar = () => {
  return (
    <Stack direction="horizontal" className="justify-content-between">
      <Image src={logo} alt="logo" width={"60px"} />
      <div className="">Navigation Bar</div>
      <ColorModeSwitch />
    </Stack>
  );
};

export default NavBar;
