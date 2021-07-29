import React, { useEffect, useRef } from "react";
import ParamsForm from "./components/ParamsForm";
import "./App.css";
import Canvas from "./components/Canvas";

const App = () => {
  const [optNum, setOptNum] = React.useState(5);
  const [optTransp, setOptTransp] = React.useState(500);

  const canvasRef = useRef<any>(null);

  return (
    <div>
      <ParamsForm
        valObjNum={optNum}
        setObjNum={setOptNum}
        valTransp={optTransp}
        setTransp={setOptTransp}
      />
      <Canvas ref={canvasRef} valObjNum={optNum} valTransp={optTransp} />
      <button
        onClick={(ret) => {
          canvasRef.current?.drawImage();
        }}
      >
        save image
      </button>
    </div>
  );
};

export default App;
