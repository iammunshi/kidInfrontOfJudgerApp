import React from 'react';


export default class Kid extends React.Component {

 constructor(props) {
   super(props);
   this.state = { emotion: 'nervous', danceSteps: [], currentStepIndex: 0, startedPerforming: false } ;
 }

 qualified() {
   this.setState({startedPerforming: false})
 }

 componentDidMount(){
     this.setState({
         danceSteps: ['step1', 'step2'],
         startedPerforming: true
     })
 }
 static getDerivedStateFromProps(props, state){
    console.log("DANCESTEPS: *** ", state.danceSteps);
    console.log("FURTHERSTEPS: *** ", props.furtherSteps);
    console.log("APPLAUD STATUS: ***", props.applaudStatus)
    // if(state.helped && props.applaudStatus){
    //     return {
    //         emotion: 'happy'
    //     }
    // }
    //  return {
    //     danceSteps: [...state.danceSteps, ...props.furtherSteps],
    //     helped: !!props.furtherSteps.length,
    //     };
    const newState = {};

    if(!state.helped){
        newState.danceSteps= [...state.danceSteps, ...props.furtherSteps];
        newState.helped= !!props.furtherSteps.length;
    }
    if(props.applaudStatus){
        newState.emotion = 'happy';
    }

    return newState;
 }

 render() {
   const {dressColor} = this.props;
   const {danceSteps, emotion, startedPerforming, currentStepIndex} = this.state;
   return (
   <div>
     <div>dressColor: { dressColor }</div>
      <div style={{backgroundColor: dressColor, width: 50, height: 50}}></div>
    <div>Emotion: { emotion }</div>
    {startedPerforming &&
    <div>
      <h1>Performing</h1>
      <div>Current Step: {danceSteps[currentStepIndex]}</div>
      <button onClick={() => this.setState({currentStepIndex: currentStepIndex + 1})}>Perform Next Step</button>
    </div>}
</div>
   );
 }
}
Kid.defaultProps = { dressColor: 'red', applaud: false, furtherSteps: [] };
