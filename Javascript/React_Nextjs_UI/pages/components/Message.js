const Message = (props) => {

  if (props.x && props.y && props.targetCellValue) {
    return (
      <div>
        <div className='x'>X: {props.x}</div>
        <div className='y'>Y: {props.y}</div>
        <div className='target-cell'>Target: {props.targetCellValue}</div>
      </div>
    )
  } else {
    return null
  }

}

export default Message