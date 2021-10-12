import React from 'react';

const LandingPage = (props) => {
  return (
    <div className='landPageWrap'>
        <h1 className='banner'>Is your leaven ready?</h1>
        <button
          className='startButton'
          onClick={props.toggleDisplayTimeLine}
          >Yes, let's start
        </button>
        <button
          className='pastLoafsButton'
          onClick={props.toggleDisplayPastLoafs}
          >No, show past loafs
        </button>
    </div>
  )
}

export default LandingPage;