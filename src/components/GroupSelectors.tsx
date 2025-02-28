import Providers from "../components/ProvidersList";
import { Stack } from "react-bootstrap";
import GenreListButton from "./GenreListButton";
import SortSelector from "./SortSelector";
import SortSelectorMobile from "./SortSelectorMobile";

const GroupSelectors = () => {
  return (
    <div className="ms-2 mb-3" style={{ width: "90%" }}>
      <Stack direction="horizontal">
        <Providers />
        <GenreListButton />
        <div className="d-none d-sm-block m-0">
          <SortSelector />
        </div>
      </Stack>
      <div className="d-sm-none">
        <SortSelectorMobile />
      </div>
    </div>
  );
};

export default GroupSelectors;
