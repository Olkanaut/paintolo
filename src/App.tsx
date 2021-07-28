import logo from './logo.png';
import InputForms from './InputForms';
import './App.css';
import React, {ChangeEventHandler, ChangeEvent} from 'react';

// interface InputForms {
// }


const App = () => {
  const [optNum, setOptNum] = React.useState(5);
	const [optTransp, setOptTransp] = React.useState(700);

  // const handleChangeNum: ChangeEventHandler<HTMLInputElement> = (event) => {
	// 	setOptNum(event.target.value);
	// };
	// const handleChangeTransp: ChangeEventHandler<HTMLInputElement> = (event) => {
	// 	setOptTransp(event.target.value);
	// };

  return (
		<div>
		  <p>num of figures: {optNum}</p>
      < InputForms val={optNum} setVal={setOptNum} />

      {/* < InputForms val={optNum} setVal={(value) => {
        setOptNum(value);
      }} /> */}

      {/* <p InputForms val={optNum, optTransp} setVal={() => setOptNum} ></p> */}

		  {/* <p>transparency: {optTransp}</p>
      < InputForms val={optTransp} setVal={setOptTransp} /> */}

		</div>
  );
}

export default App;
