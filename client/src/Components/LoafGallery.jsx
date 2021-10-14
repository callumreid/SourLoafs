import React from 'react';

const LoafGallery = (props) => {

  return (
    <div className='LoafGalleryWrap'>
        <h1 className='banner'>Illustrious Loafs</h1>
        <button onClick={props.toggleDisplayLandingPage}>Back</button>
    </div>
  )
}

export default LoafGallery;