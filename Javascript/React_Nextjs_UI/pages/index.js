import { Component } from 'react';
import CoordInput from './components/CoordInput'

export default class index extends Component {
  constructor() {
    super()
    this.state = {
      xInput: '',
      yInput: '',
      x: '',
      y: '',
    }
    this.handleFormSubmit = this.handleFormSubmit.bind(this);
    this.handleInputChange = this.handleInputChange.bind(this);
  }

  handleFormSubmit(e) {
    e.preventDefault();
    if (this.state.xInput > 12 || this.state.yInput > 12) {
      alert('Index selection is limited to 12 or below')
    } else if (this.state.xInput === '' || this.state.yInput === '') {
      alert('Please select both an x and y index')
    } else {
      this.setState({
        x: this.state.xInput,
        y: this.state.yInput,
      })
    }
  }

  handleInputChange(e) {
    e.preventDefault(e);
    const index = e.target.name;
    const value = e.target.value.replace(/[^0-9]/, '');
    index === 'x' ?
    this.setState({
      xInput: value,
    })
    : this.setState({
      yInput: value,
    })
  }

  render() {
    return (
      <div>
        <CoordInput 
          x={this.state.xInput}
          y={this.state.yInput}
          handleFormSubmit={this.handleFormSubmit}
          handleInputChange={this.handleInputChange}
        />
        <div>
          x: {this.state.x}
          <br/>
          y: {this.state.y}
        </div>
        <style jsx>{`
        
        `}</style>
      </div>
    )
  }
}