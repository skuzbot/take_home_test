import { Component } from 'react';
import CoordInput from './components/CoordInput'
import BoxStack from './components/BoxStack'
import Meta from './components/Meta'

export default class index extends Component {
  constructor() {
    super()
    this.state = {
      xInput: '',
      yInput: '',
      x: '',
      y: '',
      coordsSelected: false,
      targetCellValue: '',
    }
    this.handleFormSubmit = this.handleFormSubmit.bind(this);
    this.handleInputChange = this.handleInputChange.bind(this);
  }

  handleFormSubmit(e) {
    e.preventDefault();
    if (this.state.xInput === '' || this.state.yInput === '') {
      alert('Please select both an x and y index')
    } else if (this.state.xInput > 8 || this.state.yInput > 8) {
      alert('Index selection is limited to 8 or below')
    } else if (this.state.xInput + this.state.yInput > 9) {
      alert('That index is outside the bounds of the box stack')
    } else {
      this.setState({
        x: this.state.xInput,
        y: this.state.yInput,
        coordsSelected: true,
      })
    }
  }

  handleInputChange(e) {
    e.preventDefault(e);
    const index = e.target.name;
    let value = e.target.value.replace(/[^0-9]/, '');
    if (value !== '') {
      value = parseInt(value);
    }
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
        <Meta />
        <BoxStack 
          x={this.state.xInput}
          y={this.state.yInput}
          coordsSelected={this.state.coordsSelected}
        />
        { !this.state.coordsSelected ?
        <CoordInput 
          x={this.state.xInput}
          y={this.state.yInput}
          handleFormSubmit={this.handleFormSubmit}
          handleInputChange={this.handleInputChange}
        />
        : null
        }
        <style jsx>{`
         
        `}</style>
      </div>
    )
  }
}