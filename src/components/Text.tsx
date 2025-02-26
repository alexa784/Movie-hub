interface Props {
  text: string;
}
const Text = ({ text }: Props) => {
  return <p className="mb-0">{text}</p>;
};

export default Text;
