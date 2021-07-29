import ParamsForm from "./components/ParamsForm";
import "./App.css";
import React from "react";
import Canvas from "./components/Canvas";

const App = () => {
  const [optNum, setOptNum] = React.useState(5);
  const [optTransp, setOptTransp] = React.useState(700);

  return (
    <div>
      <ParamsForm
        valObjNum={optNum}
        setObjNum={setOptNum}
        valTransp={optTransp}
        setTransp={setOptTransp}
      />
      <Canvas valObjNum={optNum} valTransp={optTransp} />
    </div>
  );
};

export default App;
