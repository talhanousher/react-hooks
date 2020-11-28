import React, { Component } from 'react';

class UseEffectEquivalentComponent extends Component {
	constructor(props) {
		super(props)
		this.state = {
			count: 0,
			width: window.innerWidth
		}
		this.handleCountChange = this.handleCountChange.bind(this);
	}
	componentDidMount() {
		document.title = `${this.state.count} times clicked`;
		window.addEventListener('resize', () => {
			this.setState({
				width: window.innerWidth
			})
		})
	}
	componentDidUpdate() {
		document.title = `${this.state.count} times clicked`;
	}
	componentWillUnmount() {
		window.removeEventListener('resize');
	}
	handleCountChange() {
		this.setState({
			count: this.state.count + 1
		});
	}
	render() {
		return <div className="class-component">
			<button onClick={this.handleCountChange} >Click Me!</button>
			<div>
				WIDTH: {this.state.width}
			</div>
		</div>
	}
}

export default UseEffectEquivalentComponent;