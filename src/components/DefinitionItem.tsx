import { ReactNode } from "react";

interface Props {
  name: string;
  children: ReactNode;
}

const DefinitionItem = ({ children, name }: Props) => {
  return (
    <div className="mb-2">
      <h4>{name}</h4>
      {children}
    </div>
  );
};

export default DefinitionItem;
