import React from 'react';

const TimeLine = (props) => {
  return (
    <div className='TimeLineWrap'>
        <h1 className='banner'>Timeline for Bake:</h1>
        <p>Does this timeline work for you?</p>
        <button className='startBakeButton'>Bake on!</button>
        <button
          className='returnToLandingButton'
          onClick={props.toggleDisplayLandingPage}
        >Maybe later...</button>
    </div>
  )
}

export default TimeLine;