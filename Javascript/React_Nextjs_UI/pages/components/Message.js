const Message = (props) => {

  console.log('props :', props);

  if (props.x && props.y && props.targetCellValue) {
    return (
      <div>
        <div className='x'>X: {props.x}</div>
        <div>{props.currentX != props.x ? `Current X Index: ${props.currentX}` : `target cell found`}</div>
        <div className='y'>Y: {props.y}</div>
        <div>{props.currentY != props.y && props.currentX === 1 ? `Current Y Index: ${props.currentY}` : `target y axis found`}</div>
        <div className='target-cell'>Target: {props.targetCellValue}</div>
        <div>Current Cell Value: {props.currentCellValue}</div>
        <div>{
          props.initialMessage ? `We\'ll start at cell ${props.currentX}, ${props.currentY} and iterate up by next row\'s index - 1`
          : props.y != props.currentY ? `Next we'll iterate up the column until we find our target row`
          : !props.rowFound ? `Now that we've found our row we can continue into the columns by making row index + 1 our increase amount.`
          : props.x !== props.currentX ? `We iterate through the row by adding previous increase amount + 1 to our current cell`
          : `current cell ${props.currentCellValue} = target cell ${props.targetCellValue}`}
        </div>
        <div>Increase Amount: {props.currentIncrease}</div>
        <div>{
          props.y > props.currentY ?
           `${props.currentCellValue} + ${props.currentIncrease} = Next cell value: ${props.currentCellValue + props.currentIncrease}`
           : props.rowFound === false ? null
           : props.currentX !== props.x ? `${props.currentCellValue} + ${props.currentIncrease} = Next cell value: ${props.currentCellValue + props.currentIncrease}`
           : null
        }</div>
      </div>
    )
  } else {
    return null
  }

}

export default Message