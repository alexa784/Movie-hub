interface Props {
  text: string;
}

const LongText = ({ text }: Props) => {
  return <p className="mb-2">{text}</p>;
};

export default LongText;
