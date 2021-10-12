import React from "react";
import LandingPage from "./Components/LandingPage";
import TimeLine from "./Components/TimeLine";

class App extends React.Component  {
  constructor(props) {
    super(props);
    this.state = {
      displayLandingPage: true,
      displayTimeLine: false
    };
    this.toggleDisplayLandingPage = this.toggleDisplayLandingPage.bind(this);
    this.toggleDisplayTimeLine = this.toggleDisplayTimeLine.bind(this);
    this.toggleDisplayPastLoafs = this.toggleDisplayPastLoafs.bind(this);
  }

  toggleDisplayLandingPage () {
    console.log('display landingpage');
  }

  toggleDisplayTimeLine () {
    console.log('display timeline');
    this.setState({
      displayLandingPage: false,
      displayTimeLine: true
    })
  };

  toggleDisplayPastLoafs () {
    console.log('old loafs');
  };

  render () {
    const displayLandingPage = this.state.displayLandingPage;
    const displayTimeLine = this.state.displayTimeLine;
    let landingPage, timeLine;
    if (displayLandingPage) {
     landingPage = <LandingPage
     toggleDisplayPastLoafs={this.toggleDisplayPastLoafs}
     toggleDisplayTimeLine={this.toggleDisplayTimeLine}
     />
    } else if (displayTimeLine) {
      timeLine = <TimeLine />
    }

    return (
      <div className='app'>
        {landingPage}
        {timeLine}
      </div>
    )
  }

}

export default App;
