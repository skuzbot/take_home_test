const BoxStack = (props) => {

  return (
    <div>
      <br/>
      <div className='box-grid-container'>
        <div className='y-index'>
          Y:
        </div>
        <div className='row row-index-12'>12</div>
          <div className='cell 1-12'>67</div>
        <div className='row row-index-11'>11</div>
          <div className='cell cell-1-11'>56</div>
          <div className='cell cell-2-11'>68</div>
        <div className='row row-index-10'>10</div>
          <div className='cell cell-1-10'>46</div>
          <div className='cell cell-2-10'>57</div>
          <div className='cell cell-3-10'>69</div>
        <div className='row row-index-9'>9</div>
          <div className='cell cell-1-9'>37</div>
          <div className='cell cell-2-9'>47</div>
          <div className='cell cell-3-9'>58</div>
          <div className='cell cell-4-9'>70</div>
        <div className='row row-index-8'>8</div>
        <div className='row row-index-7'>7</div>
        <div className='row row-index-6'>6</div>
        <div className='row row-index-5'>5</div>
        <div className='row row-index-4'>4</div>
        <div className='row row-index-3'>3</div>
        <div className='row row-index-2'>2</div>
        <div className='row row-index-1'>1</div>
        <div className="x-index">
          X:
        </div>
      </div>
      <style jsx>{`
        .box-grid-container {
          display: inline-grid;
          border: 1px red solid;
          grid-template-columns: 14fr;
          grid-template-rows: 14fr;
        }

        .y-index {
          border: 1px blue solid;
          grid-column-start: 1;
          grid-column-end: 2;
          grid-row-start: 1;
          grid-row-end: 14;

        }

        .x-index {
          grid-row-start: 14;
        }

        .row-index-0 {
          grid-row-start: 13;
        }

        .cell {
          border: 1px blue dashed; 
        }


        .row {
          grid-column-start: 2;
          text-align: right;
        }
        
        .cell-1-12 {
          grid-column-start: 3;
          grid-row-start: 1;
        }

        .cell-1-11 {
          grid-column-start: 3;
          grid-row-start: 2;
        }
        
        .cell-2-11 {
          grid-column-start: 4;
          grid-row-start: 2;
        }

        .cell-1-10 {
          grid-column-start: 3;
          grid-row-start: 3;
        }
        
        .cell-2-10 {
          grid-column-start: 4;
          grid-row-start: 3;
        }
        
        .cell-3-10 {
          grid-column-start: 5;
          grid-row-start: 3;
        }

        .cell-1-9 {
          grid-column-start: 3;
          grid-row-start: 4;
        }

        .cell-2-9 {
          grid-column-start: 4;
          grid-row-start: 4;
        }

        .cell-3-9 {
          grid-column-start: 5;
          grid-row-start: 4;
        }

        .cell-4-9 {
          grid-column-start: 6;
          grid-row-start: 4;
        }
      `}</style>
    </div>
  )
}

export default BoxStack