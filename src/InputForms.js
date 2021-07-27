import React from 'react';

class InputForms extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			numOfFigures: 5,
			transparency: 200
		};
		this.handleInputChange = this.handleInputChange.bind(this);
	}

	handleInputChange(event) {
		const value = event.target.value;
		const name = event.target.name;
		this.setState({
			[name]: value
		});
	}

	render() {
		return (
		<div>
		  <form>
			<table>
			<tr>
				<td>number of figures:</td>
				<td>
				<input
				name="numOfFigures" type="number"
				value={this.state.numOfFigures}
				onChange={this.handleInputChange} /></td>
			</tr>

			<tr>
				<td>transparency:</td>
				<td>
				<input
				name="transparency" type="number"
				value={this.state.transparency}
				onChange={this.handleInputChange} /></td>
			</tr>
			</table>
		  </form>

		  <p>num of figures: {this.state.numOfFigures}</p>
		  <p>transparency: {this.state.transparency}</p>

		</div>
		);
	}
}

export default InputForms;