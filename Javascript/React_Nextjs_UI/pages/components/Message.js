const Message = (props) => {

  if (props.x && props.y && props.targetCellValue) {
    return (
      <div>
        <div className='current-wrapper wrapper-group'>
          <div>Current Box Id: {props.currentCellValue}</div>
          <div>Current X Index: {props.currentX}</div>
          <div>Current Y Index: {props.currentY}</div>
        </div>
        <div className='target-wrapper wrapper-group'>
          <div className='target-cell'>Target Box Id: {props.targetCellValue}</div>
          <div className='x'>Target X Index: {props.x}</div>
          <div className='y'>Target Y Index: {props.y}</div>
        </div>
        <br/>
        <div className='message-wrapper'>
          <div className='message'>{
            props.targetCellValue == props.currentCellValue ? `Target Found! Current Box Id ${props.currentCellValue} = Target Box Id ${props.targetCellValue}`
            : props.y === 1 && props.currentY === 1 ? `Since we're starting on row 1 we simply add current box id + current column index + 1 to find our next box id`
            : props.initialMessage ? `We\'ll start at box id ${props.currentCellValue} and calculate the next box id by adding our current box id and next y index - 1`
            : props.y != props.currentY ? `Next we'll iterate up the column until we find our target row`
            : !props.rowFound ? `Now that we've found our target row we can continue into the columns by making our increase ammount = row index + 1.`
            : props.x !== props.currentX ? `We iterate through the row by adding previous increase amount + 1 to our current box id`
            : null}
          </div>
          <br/>
          <div>{
            props.y > props.currentY ? `Increase Amount: ${props.currentIncrease}`
            : props.rowFound === false ? null
            : props.currentX !== props.x ? `Increase Amount:  ${props.currentIncrease}`
            : null
            }</div>
          <div>{
            props.y > props.currentY ?
            `${props.currentCellValue} + ${props.currentIncrease} = Next Box Id: ${props.currentCellValue + props.currentIncrease}`
            : props.rowFound === false ? null
            : props.currentX !== props.x ? `${props.currentCellValue} + ${props.currentIncrease} = Next cell value: ${props.currentCellValue + props.currentIncrease}`
            : null
          }</div>
        </div>
        <style jsx>{`
          .wrapper-group {
            display: flex;
            justify-content: space-around;
            margin: 10px 0px;
          }

          .message-wrapper {
            display: flex;
            align-items: center;
            justify-content: center;
            flex-direction: column;
          }

          .message {
            text-align: center;
          }
          
        `}</style>
      </div>
    )
  } else {
    return null
  }

}

export default Message