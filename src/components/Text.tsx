interface Props {
  text: string;
}
const Text = ({ text }: Props) => {
  return <p className="mb-0 ms-1">{text}</p>;
};

export default Text;
