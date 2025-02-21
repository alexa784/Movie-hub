interface Props {
  score: number;
}

const MovieScore = ({ score }: Props) => {
  const color = score <= 5 ? "bg-warning" : "bg-success";
  return (
    <span
      className={` badge ${color} opacity-90`}
      style={{
        width: 35,
      }}
    >
      {score.toPrecision(2)}
    </span>
  );
};

export default MovieScore;
