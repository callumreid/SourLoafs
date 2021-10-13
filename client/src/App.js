import React from "react";
import LandingPage from "./Components/LandingPage";
import TimeLine from "./Components/TimeLine";
import PastLoafs from "./Components/PastLoafs";
import BakePage from "./Components/BakePage";
import axios from "axios";
import {getPastLoafData} from '../src/helperfuncs.js'

class App extends React.Component  {
  constructor(props) {
    super(props);
    this.state = {
      displayLandingPage: true,
      displayTimeLine: false,
      displayPastLoafs: false,
      displayBake: false,
      pastLoafData: []
    };
    this.toggleDisplayLandingPage = this.toggleDisplayLandingPage.bind(this);
    this.toggleDisplayTimeLine = this.toggleDisplayTimeLine.bind(this);
    this.toggleDisplayPastLoafs = this.toggleDisplayPastLoafs.bind(this);
    this.toggleDisplayBake = this.toggleDisplayBake.bind(this);
    this.breadBeenMade = this.breadBeenMade.bind(this);
    this.getLoafData = this.getLoafData.bind(this);
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
      displayBake: false
    })
  }

  toggleDisplayTimeLine () {
    console.log('display timeline');
    this.setState({
      displayLandingPage: false,
      displayTimeLine: true,
      displayPastLoafs: false,
      displayBake: false
    });
  };

  toggleDisplayPastLoafs () {
    console.log('old loafs');
    this.setState({
      displayLandingPage: false,
      displayTimeLine: false,
      displayPastLoafs: true,
      displayBake: false
    });
  };

  toggleDisplayBake() {
    console.log('start bake');
    this.setState({
      displayLandingPage: false,
      displayTimeLine: false,
      displayPastLoafs: false,
      displayBake: true
    });
  }

  breadBeenMade(notes) {
    console.log('bred is dun');
    axios.post('http://localhost:3001/submitLoaf', notes);

    this.setState({
      displayLandingPage: true,
      displayTimeLine: false,
      displayPastLoafs: false,
      displayBake: false
    });
  }

  getLoafData() {
    getPastLoafData((data) => {
      this.setState({
        pastLoafData: data.data
      })
    });
  }

  render () {
    const displayLandingPage = this.state.displayLandingPage;
    const displayTimeLine = this.state.displayTimeLine;
    const displayPastLoafs = this.state.displayPastLoafs;
    const displayBake = this.state.displayBake;
    let landingPage, timeLine, pastLoafs, bake;
    if (displayLandingPage) {
     landingPage = <LandingPage
     toggleDisplayPastLoafs={this.toggleDisplayPastLoafs}
     toggleDisplayTimeLine={this.toggleDisplayTimeLine}
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

    return (
      <div className='app'>
        {landingPage}
        {timeLine}
        {pastLoafs}
        {bake}
      </div>
    )
  }

}

export default App;
