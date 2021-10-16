import React from "react";
import LandingPage from "./Components/LandingPage";
import TimeLine from "./Components/TimeLine";
import PastLoafs from "./Components/PastLoafs";
import BakePage from "./Components/BakePage";
import LoafGallery from "./Components/LoafGallery";
import axios from "axios";
import {getPastLoafData} from './helperfuncs.js';
import tempBred from './tempBred';

class App extends React.Component  {
  constructor(props) {
    super(props);
    this.state = {
      displayLandingPage: true,
      displayTimeLine: false,
      displayPastLoafs: false,
      displayBake: false,
      displayLoafGallery: false,
      selectedFile: null,
      pastLoafData: [],
      photos: tempBred
    };
    this.toggleDisplayLandingPage = this.toggleDisplayLandingPage.bind(this);
    this.toggleDisplayTimeLine = this.toggleDisplayTimeLine.bind(this);
    this.toggleDisplayPastLoafs = this.toggleDisplayPastLoafs.bind(this);
    this.toggleDisplayBake = this.toggleDisplayBake.bind(this);
    this.toggleDisplayLoafGallery = this.toggleDisplayLoafGallery.bind(this);
    this.breadBeenMade = this.breadBeenMade.bind(this);
    this.getLoafData = this.getLoafData.bind(this);
    this.fileSelectedHandler = this.fileSelectedHandler.bind(this);
    this.fileUploadHandler = this.fileUploadHandler.bind(this);
  }

  componentDidMount() {
    this.getLoafData();
  }

  toggleDisplayLandingPage () {
    console.log('display landingpage');
    this.setState({
      displayLandingPage: true,
      displayTimeLine: false,
      displayPastLoafs: false,
      displayBake: false,
      displayLoafGallery: false
    })
  }

  toggleDisplayTimeLine () {
    console.log('display timeline');
    this.setState({
      displayLandingPage: false,
      displayTimeLine: true,
      displayPastLoafs: false,
      displayBake: false,
      displayLoafGallery: false
    });
  };

  toggleDisplayPastLoafs () {
    console.log('old loafs');
    this.setState({
      displayLandingPage: false,
      displayTimeLine: false,
      displayPastLoafs: true,
      displayBake: false,
      displayLoafGallery: false
    });
  };

  toggleDisplayBake() {
    console.log('start bake');
    this.setState({
      displayLandingPage: false,
      displayTimeLine: false,
      displayPastLoafs: false,
      displayBake: true,
      displayLoafGallery: false
    });
  };

  toggleDisplayLoafGallery() {
    console.log('lookatdem loafs');
    this.setState({
      displayLandingPage: false,
      displayTimeLine: false,
      displayPastLoafs: false,
      displayBake: false,
      displayLoafGallery: true
    });
  };

  breadBeenMade(notes) {
    console.log('bred is dun');
    axios.post('http://localhost:3001/submitLoaf', notes);

    this.setState({
      displayLandingPage: true,
      displayTimeLine: false,
      displayPastLoafs: false,
      displayBake: false
    });
  };

  getLoafData() {
    getPastLoafData((data) => {
      this.setState({
        pastLoafData: data.data
      })
    });
  };

  fileSelectedHandler(e) {
    const file = e.target.files[0];
    //console.log(file)
    this.setState({
      selectedFile: file
    })
  }


  fileUploadHandler(e) {
    e.preventDefault();
    e.stopPropagation();
    let file = this.state.selectedFile;
    let formData = new FormData();
    formData.append('file', file);

    axios.post('http://localhost:3001/uploadLoaf', formData, {

    })
    .then(res => console.log(res.statusText))
    // $.ajax({
    //   type: 'POST',
    //   data: formData,
    //   url:'http://localhost:3001/uploadLoaf',
    //   cache: false,
    //   contentType: false,
    //   processData: false,
    //   success: () => {
    //     // reload the page
    //     console.log('file posted')

    //   }
    // });
   }

  render () {
    const displayLandingPage = this.state.displayLandingPage;
    const displayTimeLine = this.state.displayTimeLine;
    const displayPastLoafs = this.state.displayPastLoafs;
    const displayBake = this.state.displayBake;
    const displayLoafGallery = this.state.displayLoafGallery;
    let landingPage, timeLine, pastLoafs, bake, loafGallery;
    if (displayLandingPage) {
     landingPage = <LandingPage
     toggleDisplayPastLoafs={this.toggleDisplayPastLoafs}
     toggleDisplayTimeLine={this.toggleDisplayTimeLine}
     toggleDisplayLoafGallery={this.toggleDisplayLoafGallery}
     />
    }
    if (displayTimeLine) {
      timeLine = <TimeLine
       toggleDisplayLandingPage={this.toggleDisplayLandingPage}
       toggleDisplayBake={this.toggleDisplayBake}
      />
    }
    if (displayPastLoafs) {
      pastLoafs = <PastLoafs
        toggleDisplayLandingPage={this.toggleDisplayLandingPage}
        pastLoafData={this.state.pastLoafData}
       />
    }
    if (displayBake) {
      bake = <BakePage
       breadBeenMade={this.breadBeenMade}
       />
    }
    if (displayLoafGallery) {
      loafGallery = <LoafGallery
        toggleDisplayLandingPage={this.toggleDisplayLandingPage}
        fileSelectedHandler={this.fileSelectedHandler}
        fileUploadHandler={this.fileUploadHandler}
        photos={this.state.photos}
      />
    }

    return (
      <div className='app'>
        {landingPage}
        {timeLine}
        {pastLoafs}
        {bake}
        {loafGallery}
      </div>
    )
  }

}

export default App;
