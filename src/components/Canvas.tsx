import React, { FC } from "react";

interface ParamsFormProps {
  valObjNum: number;
  valTransp: number;
}
//useRef
const Canvas: FC<ParamsFormProps> = (props) => {
  const canvas: any = document.getElementById("canvas"); // const canvas = document.querySelector('#canvas');
  if (!canvas.getContext) {
    throw "Error while getting canvas occured";
  }
  const ctx = canvas.getContext("2d");

  return <div>ddd</div>;
};

export default Canvas;
