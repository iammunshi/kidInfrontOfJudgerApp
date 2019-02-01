import React, { Component } from 'react';
import './App.css';
import Kid from './components/Kid';
import Teacher from './components/Teacher';
import Judge from './components/Judge';

class App extends Component {

  constructor(props) {
    super(props);
    this.state = { volume: 0} ;

    this.getStepsFromTeacher = this.getStepsFromTeacher.bind(this);
    this.getApplaudStatus = this.getApplaudStatus.bind(this);
  }

  static getDerivedStateFromProps(){
    return {volume: 5}
  }

  getStepsFromTeacher(steps){
    this.setState({
      steps
    })
  }

  getApplaudStatus(status){
    this.setState({
      applaud: status
    })
  }
  render() {
    const {volume, steps, applaud} = this.state;
    console.log(steps)
    return (
      <div className="App">
        <header className="App-header">
          <h5>Volume {volume}</h5>
          <h2>Kid</h2>
          <Kid dressColor="green" furtherSteps={steps} applaudStatus={applaud}/>
          <h2>Teacher</h2>
          <Teacher getStepsFromTeacher={this.getStepsFromTeacher}/>
          <h2>Judge</h2>
          <Judge getApplaudStatus={this.getApplaudStatus}/>
        </header>
      </div>
    );
  }
}

export default App;
