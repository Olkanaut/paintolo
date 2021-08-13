import React, { useRef } from "react";
import ParamsForm from "./components/ParamsForm";
import "./App.css";
import Canvas from "./components/Canvas";

const App = () => {
  const canvasRef = useRef<any>(null);
  const link = (
    <a href="https://www.moma.org/collection/works/79040">
      large body of drawings
    </a>
  );

  return (
    <div className="App">
      <h1 className="headline">Supreme Generator</h1>
      <p className="intro">
        The project was inspired by artworks of Russian suprematist El Lissitzky
        who introduced a {link} between 1919 and 1927 named by the word 'Proun',
        an acronym for 'project of the affirmation of the new'
      </p>
      <ParamsForm className="container" />
      <Canvas ref={canvasRef} />
      <b className="container">
        <button
          onClick={(ret) => {
            canvasRef.current?.changeSeed();
          }}
          className="button button_large"
        >
          seed
        </button>

        <button
          onClick={(ret) => {
            canvasRef.current?.saveImage();
          }}
          className="button button_large"
        >
          save image
        </button>
      </b>
    </div>
  );
};

export default App;
