import ReactPlayer from "react-player";

interface Props {
  platfromKey: string | undefined;
  site: string | undefined;
}
const Trailer = ({ platfromKey, site }: Props) => {
  if (!platfromKey || !site) return null;

  let path = null;
  site = site.trim().toLowerCase();

  switch (site) {
    case "youtube":
      path = `https://www.youtube.com/embed/${platfromKey}`;
      break;
    case "vimeo":
      path = `https://player.vimeo.com/video/${platfromKey}`;
      break;
    default:
      return null;
      break;
  }
  return (
    <div className="mb-2" style={{ overflow: "hidden", borderRadius: 25 }}>
      <ReactPlayer url={path} width={"100%"} controls></ReactPlayer>
    </div>
  );
};

export default Trailer;
