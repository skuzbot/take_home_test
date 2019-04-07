import { Component } from 'react'

export default class BoxStack extends Component {



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
          <div className='c1-1 cell'>1</div>
          <div className='c2-1 cell'>3</div>
          <div className='c3-1 cell'>6</div>
          <div className='c4-1 cell'>10</div>
          <div className='c5-1 cell'>15</div>
          <div className='c6-1 cell'>21</div>
          <div className='c7-1 cell'>28</div>
          <div className='c8-1 cell'>36</div>
        </div>
        <div className='message-container'></div>
      </div>
      <style jsx>{`
        .outer-wrapper {
          display: flex
          align-items: center;
          justify-content: center;
          width: 100vw;
          border: 1px red solid;
        }

        .box-stack-container {
          display: flex;
          padding: 20px;
          flex-direction: column;
          justify-content: center;
          border: 1px solid black;
          height: 400px;

        }

        .row {
          display: flex;
          flex-direction: row;
          justify-content: flex-start;
        }

        .cell {
          margin: 5px;
          padding: 4px;
          border: 1px blue dashed;
          width: 20px;
          height: 20px;
          text-align: center;
        }
      `}</style>
    </div>
  )
}

export default BoxStack