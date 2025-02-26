import React, { ReactNode } from "react";

interface Props {
  name: string;
  children: ReactNode;
}

const DefinitionItem = ({ children, name }: Props) => {
  return (
    <>
      <h4>{name}</h4>
      {children}
    </>
  );
};

export default DefinitionItem;
