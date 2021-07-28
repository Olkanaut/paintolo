import ParamsForm from "./components/ParamsForm";
import "./App.css";
import React from "react";

const App = () => {
  const [optNum, setOptNum] = React.useState(5);
  const [optTransp, setOptTransp] = React.useState(700);

  return (
    <ParamsForm
      valObjNum={optNum}
      setObjNum={setOptNum}
      valTransp={optTransp}
      setTransp={setOptTransp}
    />
  );
};

export default App;
