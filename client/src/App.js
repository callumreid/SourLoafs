import React from "react";
import LandingPage from "./Components/LandingPage";
import TimeLine from "./Components/TimeLine";
import PastLoafs from "./Components/PastLoafs";

class App extends React.Component  {
  constructor(props) {
    super(props);
    this.state = {
      displayLandingPage: true,
      displayTimeLine: false,
      displayPastLoafs: false
    };
    this.toggleDisplayLandingPage = this.toggleDisplayLandingPage.bind(this);
    this.toggleDisplayTimeLine = this.toggleDisplayTimeLine.bind(this);
    this.toggleDisplayPastLoafs = this.toggleDisplayPastLoafs.bind(this);
  }

  toggleDisplayLandingPage () {
    console.log('display landingpage');
    this.setState({
      displayLandingPage: true,
      displayTimeLine: false,
      displayPastLoafs: true
    })
  }

  toggleDisplayTimeLine () {
    console.log('display timeline');
    this.setState({
      displayLandingPage: false,
      displayTimeLine: true,
      displayPastLoafs: false
    });
  };

  toggleDisplayPastLoafs () {
    console.log('old loafs');
    this.setState({
      displayLandingPage: false,
      displayTimeLine: false,
      displayPastLoafs: true
    });
  };

  render () {
    const displayLandingPage = this.state.displayLandingPage;
    const displayTimeLine = this.state.displayTimeLine;
    const displayPastLoafs = this.state.displayPastLoafs;
    let landingPage, timeLine, pastLoafs;
    if (displayLandingPage) {
     landingPage = <LandingPage
     toggleDisplayPastLoafs={this.toggleDisplayPastLoafs}
     toggleDisplayTimeLine={this.toggleDisplayTimeLine}
     />
    } else if (displayTimeLine) {
      timeLine = <TimeLine
       toggleDisplayLandingPage={this.toggleDisplayLandingPage}
      />
    } else if (displayPastLoafs) {
      pastLoafs = <PastLoafs
        toggleDisplayLandingPage={this.toggleDisplayLandingPage}
       />
    }

    return (
      <div className='app'>
        {landingPage}
        {timeLine}
        {pastLoafs}
      </div>
    )
  }

}

export default App;
