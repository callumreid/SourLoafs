import React from 'react';

const LoafGallery = (props) => {

  return (
    <div className='LoafGalleryWrap'>
        <h1 className='banner'>Illustrious Loafs</h1>
        <form>
          <label>Add a loaf to the exhibit:
            <input type='file' name='image' onChange={props.fileSelectedHandler} />
            <button onClick={props.fileUploadHandler}>Upload</button>
          </label>
        </form>
        {props.photos.map(photo => (
          <img src={photo} key={photo} alt='picsofbread'/>
        ))}
        <button onClick={props.toggleDisplayLandingPage}>Back</button>
    </div>
  )
}

export default LoafGallery;