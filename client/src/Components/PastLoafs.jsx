import React from 'react';

const PastLoafs = (props) => {
  return (
    <div className='PastLoafsWrap'>
        <h1 className='PastLoafsHeader'>Loaf History</h1>
        <p>Lots of past loaf history stored in a db</p>
        <button
          className='returnToLandingButton'
          onClick={props.toggleDisplayLandingPage}
        >Let's get that bread</button>
    </div>
  )
}

export default PastLoafs;