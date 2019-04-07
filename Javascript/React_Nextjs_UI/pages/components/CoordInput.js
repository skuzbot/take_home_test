const CoordInput = (props) => {

  return (
    <div className='coord-input-wrapper'>
      <form>
        <input 
          className='x-input input'
          placeholder='Enter x coordinate'
          value={props.x}
          name='x'
          onChange={(e) => props.handleInputChange(e)}>

        </input>
        <input 
          className='y-input input'
          placeholder='Enter y coordinate'
          value={props.y}
          name='y'
          onChange={(e) => props.handleInputChange(e)}>

        </input>
        <button
          className='submit-button'
          type='button'
          onClick={(e) => props.handleFormSubmit(e)}>
            Submit
        </button>
      </form>
      <style jsx>{`
      
      `}</style>
    </div>
  )
}

export default CoordInput