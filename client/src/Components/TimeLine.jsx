import React from 'react';
import bakeTimeCalc from '../helperfuncs';

const TimeLine = (props) => {
  const finishedBakeTime = bakeTimeCalc();
  return (
    <div className='TimeLineWrap'>
        <h1 className='banner'>{finishedBakeTime}</h1>
        <p>Does this timeline work for you?</p>
        <button
        className='startBakeButton'
        onClick={props.toggleDisplayBake}
        >Bake on!</button>
        <button
          className='returnToLandingButton'
          onClick={props.toggleDisplayLandingPage}
        >Maybe later...</button>
    </div>
  )
}

export default TimeLine;