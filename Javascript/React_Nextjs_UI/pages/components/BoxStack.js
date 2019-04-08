import { Component } from 'react'
import Message from './Message'

export default class BoxStack extends Component {
  constructor(props) {
    super(props)
    this.state = {
      curRow: 1,
      curCol: 1,
      targetCellValue: '',
      targetClassName: 'c1-1',
      targetSearched: false,
      initialMessage: true,
      currentCellValue: 1,
      currentIncrease: 1,
      currentClassName: 'c1-1',
      currentX: 1,
      currentY: 1,
      rowFound: false,
      targetFound: false,
    }
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.coordsSelected !== this.props.coordsSelected) {
      const targetCellValue = this.findTargetCell()
      const targetClassName = `c${this.props.x}-${this.props.y}`
      this.setState({
        targetCellValue: targetCellValue,
        targetClassName: targetClassName
      }, () => {
        const targetDiv = document.getElementsByClassName(targetClassName);
        const prevClassName = targetDiv[0].className;
        targetDiv[0].className = `${prevClassName} target-cell`
      })
    }
  }

  findTargetCell() {
    if (this.props.x !== '' && this.props.y !== '') {
      const targetCellValue = document.getElementsByClassName(`c${this.props.x}-${this.props.y}`)[0].innerHTML;
      return targetCellValue;
    }
  }

  updateCurrentCellClassName() {
    const currentCellDiv = document.getElementsByClassName('current-cell');
    const basicClassName = currentCellDiv[0].className.replace('current-cell', 'cell');
    currentCellDiv[0].className = basicClassName;
    const nextCellDiv = document.getElementsByClassName(`c${this.state.currentX}-${this.state.currentY}`)
    const currentClassName = nextCellDiv[0].className.replace('cell', 'current-cell')
    nextCellDiv[0].className = currentClassName;
  }

  triggerNextStep() {
    if (this.state.targetFound === false) {
      if (this.state.currentY < this.props.y) {
        const nextIncrease = this.state.currentY;
        const nextCellValue = this.state.currentCellValue + nextIncrease;
        this.setState({
          currentY: this.state.currentY + 1,
          currentIncrease: this.state.currentIncrease + 1,
          currentCellValue: nextCellValue,
          initialMessage: false,
        }, () => {
          this.updateCurrentCellClassName()
        })
      } else if (this.state.rowFound === false) {
        const nextIncrease = this.props.y + 1
        this.setState({
          rowFound: true,
          currentIncrease: nextIncrease,
        }, () => {
          this.updateCurrentCellClassName()
        })
      } else if (this.state.currentCellValue != this.state.targetCellValue) {
        const nextCellValue = this.state.currentCellValue + this.state.currentIncrease;
        this.setState({
          currentX: this.state.currentX + 1,
          currentIncrease: this.state.currentIncrease + 1,
          currentCellValue: nextCellValue,
        }, () => {
          this.updateCurrentCellClassName()
          if (this.state.currentCellValue == this.state.targetCellValue) {
            this.setState({
              targetFound: true,
            })
          }
        })
      }
    }
  }

  render() {

    return (
      <div className='outer-wrapper'>
        <div className='box-stack-container'>
          <div className='row-8-container row'>
            <div className='c1-8 cell'>29</div>
          </div>
          <div className='row-7-container row'>
            <div className='c1-7 cell'>22</div>
            <div className='c2-7 cell'>30</div>
          </div>
          <div className='row-6-container row'>
            <div className='c1-6 cell'>16</div>
            <div className='c2-6 cell'>23</div>
            <div className='c3-6 cell'>31</div>
          </div>
          <div className='row-5-container row'>
            <div className='c1-5 cell'>11</div>
            <div className='c2-5 cell'>17</div>
            <div className='c3-5 cell'>24</div>
            <div className='c4-5 cell'>32</div>
          </div>
          <div className='row-4-container row'>
            <div className='c1-4 cell'>7</div>
            <div className='c2-4 cell'>12</div>
            <div className='c3-4 cell'>18</div>
            <div className='c4-4 cell'>25</div>
            <div className='c5-4 cell'>33</div>
          </div>
          <div className='row-3-container row'>
            <div className='c1-3 cell'>4</div>
            <div className='c2-3 cell'>8</div>
            <div className='c3-3 cell'>13</div>
            <div className='c4-3 cell'>19</div>
            <div className='c5-3 cell'>26</div>
            <div className='c6-3 cell'>34</div>
          </div>
          <div className='row-2-container row'>
            <div className='c1-2 cell'>2</div>
            <div className='c2-2 cell'>5</div>
            <div className='c3-2 cell'>9</div>
            <div className='c4-2 cell'>14</div>
            <div className='c5-2 cell'>20</div>
            <div className='c6-2 cell'>27</div>
            <div className='c7-2 cell'>35</div>
          </div>
          <div className='row-1-container row'>
            <div className='c1-1 current-cell' name='c1-1'>1</div>
            <div className='c2-1 cell' name='c2-1'>3</div>
            <div className='c3-1 cell' name='c3-1'>6</div>
            <div className='c4-1 cell' name='c4-1'>10</div>
            <div className='c5-1 cell' name='c5-1'>15</div>
            <div className='c6-1 cell' name='c6-1'>21</div>
            <div className='c7-1 cell' name='c7-1'>28</div>
            <div className='c8-1 cell' name='c8-1'>36</div>
          </div>
          <button
            onClick={!this.state.targetFound ? () => this.triggerNextStep()
            : null}>
            {!this.state.targetFound ? 'Next Step' : 'Steps Complete'}
          </button>
        </div>
        <div className='message-container'>
          <Message 
            x={this.props.x}
            y={this.props.y}
            targetCellValue={this.state.targetCellValue}
            initialMessage={this.state.initialMessage}
            currentCellValue={this.state.currentCellValue}
            currentIncrease={this.state.currentIncrease}
            currentX={this.state.currentX}
            currentY={this.state.currentY}
            rowFound={this.state.rowFound}
            targetFound={this.state.targetFound}
          />
        </div>
        <style jsx>{`
          .outer-wrapper {
            display: flex
            align-items: center;
            justify-content: center;
            width: 100vw;
            padding: 30px;
          }
  
          .box-stack-container {
            display: flex;
            padding: 20px;
            flex-direction: column;
            justify-content: center;
            height: 400px;
            background-color: #E1E9F2;
          }

          .message-container {
            width: 50vw;
            background-color: #A4A7AB;
          }
  
          .row {
            display: flex;
            flex-direction: row;
            justify-content: flex-start;
          }
  
          .cell {
            margin: 5px;
            padding: 4px;
            border: 1px #84949C dashed;
            width: 20px;
            height: 20px;
            text-align: center;
          }

          .target-cell {
            margin: 5px;
            padding: 3px;
            border: 2px #E38FA8 solid;
            width: 20px;
            height: 20px;
            text-align: center;
          }
          
          .current-cell {
            margin: 5px;
            padding: 3px;
            border: 2px #DBB193 solid;
            width: 20px;
            height: 20px;
            text-align: center;
          }
        `}</style>
      </div>
    )
  }
}
