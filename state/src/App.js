import React, { Component } from 'react';
import './App.css';
import myPic from './images/saber.jpeg'
class App extends Component {
  //Constructor and State Initialization:
  constructor(props) {
    super(props);
    this.state = {
      person:{
        fullName:'Fekih Saber',
        bio:'Ambitious software student',
        imgSrc: myPic,
        profession:'Software student'
      },
      shows: false,
      mountedTime: 0,
        };
  
}
//Lifecycle Methods:
componentDidMount() {
  this.setInterval=setInterval(()=>{
    this.setState({mountedTime:this.state.mountedTime+1});
  },1000);
}
componentWillUnmount() {
  clearInterval(this.interval);
}
//Method to Toggle Profile Visibility:
toggleShow=()=>{
  this.setState({shows:!this.state.shows});
}
//Render Method:
render () {
  const{person,shows,mountedTime}=this.state;
  return(
    <div className='App'>
    <header className='App-header'>
    <button onClick={this.toggleShow}>
    {shows ? 'Hide': 'Show'}Profile
    </button>

    {shows &&(
      <div className='profile'>
      <img src={person.imgSrc} alt={person.fullName}/>
      <h1>{person.fullName}</h1>
      <p>{person.bio}</p>
      <h2>{person.profession}</h2>
      </div>
    )}
    <div>
    <h3>Time since mounted:{mountedTime} secondes</h3>
    </div>
    </header>
    </div>
  );
}

}
export default App;
