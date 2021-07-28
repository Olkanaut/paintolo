// import React, {useState} from 'react';
import React, {ChangeEventHandler, ChangeEvent, FC} from 'react';

interface InputFormProps {
	val: number;
	// val: { number, number} ;//action+
	setVal: (value: number) => void;
}

const InputForms: FC<InputFormProps> = (props) => {
	
	const handleChange: ChangeEventHandler<HTMLInputElement> = (event) => {
		console.log(event);
		console.log("target: ", event.target);
		console.log("val: ", event.currentTarget.value);
		const newValue = parseInt(event.currentTarget.value, 10);
		props.setVal(newValue);
	}

	return (
		<div>
			{/* <p>num of figures: {props.val}</p> */}
			<input
				name="numOfFigures" type="number" value={props.val} min="1" max="500"
				// name="numOfFigures" type="number" min="1" max="500"
				// onChange={props.setVal} />
				onChange={handleChange} />
		  {/* <form>
			<table><tbody>
			<tr>
				<td>number of figures:</td>
				<td>
				<input
				name="numOfFigures" type="number" value={optNum} min="1" max="500"
				onChange={handleChangeNum} /></td>
			</tr>

			<tr>
				<td>transparency:</td>
				<td>
				<input
				name="transparency" type="number" value={optTransp} min="10" max="1000"
				onChange={handleChangeTransp} /></td>
			</tr>
			</tbody></table>
		  </form>

		  <p>num of figures: {optNum}</p>
		  <p>transparency: {optTransp}</p> */}

		</div>
	);
}

export default InputForms;

// class InputForms extends React.Component {
// 	constructor(props) {
// 		super(props);
// 		this.state = {
// 			numOfFigures: 5,
// 			transparency: 200
// 		};
// 		this.handleInputChange = this.handleInputChange.bind(this);
// 	}

// 	handleInputChange(event) {
// 		const value = event.target.value;
// 		const name = event.target.name;
// 		this.setState({
// 			[name]: value
// 		});
// 	}

// 	render() {
// 		return (
// 		<div>
// 		  <form>
// 			<table>
// 			<tr>
// 				<td>number of figures:</td>
// 				<td>
// 				<input
// 				name="numOfFigures" type="number"
// 				value={this.state.numOfFigures}
// 				onChange={this.handleInputChange} /></td>
// 			</tr>

// 			<tr>
// 				<td>transparency:</td>
// 				<td>
// 				<input
// 				name="transparency" type="number"
// 				value={this.state.transparency}
// 				onChange={this.handleInputChange} /></td>
// 			</tr>
// 			</table>
// 		  </form>

// 		  <p>num of figures: {this.state.numOfFigures}</p>
// 		  <p>transparency: {this.state.transparency}</p>

// 		</div>
// 		);
// 	}
// }

// export default InputForms;