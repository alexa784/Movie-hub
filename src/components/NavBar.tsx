import { Stack, Image } from "react-bootstrap";
import logo from "../assets/logo.webp";
import ColorModeSwitch from "./ColorModeSwitch";
import SearchMovies from "./SearchMovies";
import { NavLink } from "react-router-dom";

const NavBar = () => {
  return (
    <Stack
      direction="horizontal"
      className="justify-content-between me-1"
      gap={3}
    >
      <NavLink to={"/"}>
        <Image src={logo} alt="logo" width={"60px"} />
      </NavLink>
      <SearchMovies />
      <ColorModeSwitch />
    </Stack>
  );
};

export default NavBar;
