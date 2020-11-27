import React, { Component } from 'react';

class UseStateEquivalentComponent extends Component {
  constructor(props) {
    super(props)
    this.state = {
      firstName: '',
      lastName: '',
    }
    this.handleFirstNameChange = this.handleFirstNameChange.bind(this);
    this.handleLastNameChange = this.handleLastNameChange.bind(this);
  }
  handleFirstNameChange(e) {
    this.setState({
      firstName: e.target.value
    });
  }
  handleLastNameChange(e) {
    this.setState({
      lastName: e.target.value
    });
  }
  render() {
    return <div className="class-component">
      <div>
        <label>
          First Name :
        <input value={this.state.firstName} onChange={this.handleFirstNameChange} placeholder="First Name" />
        </label>
      </div>
      <br />
      <div>
        <label>
          Last Name :
        <input value={this.state.lastName} onChange={this.handleLastNameChange} placeholder="Last Name" />
        </label>
      </div>
      <br />
      <div>Display First Name : {this.state.firstName}</div>
      <div>Display First Name :  {this.state.lastName}</div>
    </div>
  }
}

export default UseStateEquivalentComponent;