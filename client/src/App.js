import React from "react";
import LandingPage from "./Components/LandingPage";

class App extends React.Component  {
  constructor(props) {
    super(props);
    this.state = {
      displayLanding: true,
      displayTimeLine: false
    };
    this.toggleDisplayTimeLine = this.toggleDisplayTimeLine.bind(this);
    this.toggleDisplayPastLoafs = this.toggleDisplayPastLoafs.bind(this);
  }

  toggleDisplayTimeLine () {
    console.log('display timeline');
    //this.setState({displayTimeLine: true})
  };

  toggleDisplayPastLoafs () {
    console.log('old loafs');
  };

  render () {
    return (
      <div className='app'>
        <LandingPage
        toggleDisplayPastLoafs={this.toggleDisplayPastLoafs}
        toggleDisplayTimeLine={this.toggleDisplayTimeLine}
        />
      </div>
    )
  }

}

export default App;
