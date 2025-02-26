import Text from "./Text";

interface Props {
  realName: string;
  characterName: string;
}

const MovieActor = ({ realName, characterName }: Props) => {
  return (
    <>
      <Text text={realName} /> as <Text text={characterName} />
    </>
  );
};

export default MovieActor;
