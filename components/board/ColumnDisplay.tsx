import React from "react";
import ColorCircle from "./ColorCircle";

type Props = {
    name: string;
    length: number;
};

const ColumnDisplay = ({name, length}: Props) => {
  return (
    <div className="flex  flex-row items-center ">
      <ColorCircle name={name} />
      <div className="p-3">{name}</div>
      <div>({length})</div>
    </div>
  );
};

export default ColumnDisplay;
