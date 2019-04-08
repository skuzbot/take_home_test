const CoordInput = (props) => {

  return (
    <div className='outer-wrapper'>
      <div className='welcome-message'>
        Hey thanks for checking this out.<br/><br/>I wanted to showcase a little of my React 
        experince so I threw together this demonstration of my thought process while solving 
        this algorithm. I built this using React and NextJS. It's not necessarily intended to
         solve the algorithm itself. That stuff can be found in either the Elixir or Javascript
         files of this repo.
        <br/><br/>Enter coordinates below for a box stack with max x and y 
        index of 8.
      </div>
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
      </div>
      <style jsx>{`
        .outer-wrapper {
          display: flex;
          flex-direction: column;
          align-items: center;
        }

        .coord-input-wrapper {
          display: flex;
          justify-content: center;
          align-items: center;
          padding: 30px;
        }

        .welcome-message {
          width: 60vw;
          margin: 20px;
        }
      `}</style>
    </div>
  )
}

export default CoordInput