import React from 'react';
import {bakeTimeCalc} from '../helperfuncs';

const TimeLine = (props) => {
  const finishedBakeTime = bakeTimeCalc();
  return (
    <div className='TimeLineWrap'>
        <h1 className='banner'>Bread O'Clock = {finishedBakeTime}</h1>
        <p>If you start now, your bread is expected to be complete at {finishedBakeTime}</p>
        <p>Does this work?</p>
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