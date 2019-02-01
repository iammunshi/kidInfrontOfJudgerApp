import React from 'react';
export default class Judge extends React.Component {
    constructor() {
     super()
   
     this.state = {stars: 0, available: false}
    }
   
    applaud() {
      this.props.getApplaudStatus(true)
    }
   
    provideStars() {
      const {stars} = this.state;
      if(stars <5){
      this.setState({stars: stars + 1})
      }
    }
    
    shouldComponentUpdate(nextProp, nextState){
      const {stars} = this.state;
      console.log(stars)
      if(this.state.stars !== nextState.stars){
        return true
      }
    }
    componentDidUpdate(prevProps, prevState){
      console.log("STARS>",this.state.stars)
      console.log("PRREVSTARS", prevState)
      console.log(this.state.available)
      if(this.state.stars === prevState.stars){
        this.setState({
          available:true
        })
      }
    }
    render() {
      const {stars, available} = this.state;
   
      return (
        <div>
          <button type="button" onClick={this.applaud.bind(this)}>
           Appreciate performance
          </button>
          <button type="button" onClick={this.provideStars.bind(this)}>
           Provide stars
          </button>
   
          Kid is available: {available? <h1>Available</h1> : <h1>unavailable</h1>}
   
          Stars gained: {stars}
        </div>
      );
    }
   }
   