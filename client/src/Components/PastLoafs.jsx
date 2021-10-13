import React from 'react';

const PastLoafs = (props) => {
  let loafs = props.pastLoafData.map(loaf => {
    return <li key={`loaf${loaf.loafId}`}>
      Loaf number {loaf.loafId}: <br/>
      - {loaf.stepFourInput} <br/>
      - {loaf.stepFiveInput} <br/>
      - {loaf.stepEightInput} <br/>
      - {loaf.stepNineInput} <br/>
      - {loaf.finalNotesInput} <br/>
      </li>
  })
  return (
    <div className='PastLoafsWrap'>
        <h1 className='PastLoafsHeader'>Notes on Past Loafs</h1>
        <ul>
        {loafs}
        </ul>
        <button
          className='returnToLandingButton'
          onClick={props.toggleDisplayLandingPage}
        >Let's get that bread</button>
    </div>
  )
}

export default PastLoafs;