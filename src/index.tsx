import React, { createElement } from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";

import reportWebVitals from "./reportWebVitals";

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById("root")
);

// const r = document.getElementById('root');
// if (!r)
//     throw new Error('sjfg');
// const b = document.createElement('h1');
// b.innerText = 'hello';
// r.appendChild(b);

// r.innerHTML = '<h1>hello</h1>';
reportWebVitals();

let a = 1;

function b() {
  return a;
}
