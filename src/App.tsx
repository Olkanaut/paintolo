import React from "react";
import ParamsForm from "./components/ParamsForm";
import "./App.css";
import Canvas from "./components/Canvas";

const App = () => {
  const [optNum, setOptNum] = React.useState(5);
  const [optTransp, setOptTransp] = React.useState(500);

  return (
    <div>
      <ParamsForm
        valObjNum={optNum}
        setObjNum={setOptNum}
        valTransp={optTransp}
        setTransp={setOptTransp}
      />
      <Canvas valObjNum={optNum} valTransp={optTransp} />
      <button onClick={(gfg) => console.log("ddd")}>save image</button>
    </div>
  );
};

export default App;
