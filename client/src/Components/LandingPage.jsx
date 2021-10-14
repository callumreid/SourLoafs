import React from 'react';

const LandingPage = (props) => {
  return (
    <div className='landPageWrap'>
      <h1 className='banner'>Is your leaven ready?</h1>
      <div className='landingPageButtons'>
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
        <button
          className='LoafGalleryButton'
          onClick={props.toggleDisplayLoafGallery}
          >Let me see them loafs
        </button>
      </div>
    </div>
  )
}

export default LandingPage;