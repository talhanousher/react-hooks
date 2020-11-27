import React, { Component } from 'react';

class UseEffectEquivalentComponent extends Component {
	constructor(props) {
		super(props)
		this.state = {
			count: 0
		}
		this.handleCountChange = this.handleCountChange.bind(this);
	}
	componentDidMount() {
		document.title = `${this.state.count} times clicked`;
	}
	componentDidUpdate() {
		document.title = `${this.state.count} times clicked`;
	}
	handleCountChange() {
		this.setState({
			count: this.state.count + 1
		});
	}
	render() {
		return <div className="class-component">
			<button onClick={this.handleCountChange} >Click Me!</button>
		</div>
	}
}

export default UseEffectEquivalentComponent;