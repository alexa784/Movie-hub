import { Stack, Image } from "react-bootstrap";
import logo from "../assets/logo.webp";
import ColorModeSwitch from "./ColorModeSwitch";
import SearchMovies from "./SearchMovies";

const NavBar = () => {
  return (
    <Stack
      direction="horizontal"
      className="justify-content-between me-1"
      gap={3}
    >
      <Image src={logo} alt="logo" width={"60px"} />
      <SearchMovies />
      <ColorModeSwitch />
    </Stack>
  );
};

export default NavBar;
