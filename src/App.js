
import React, { Component } from 'react';
import './App.css';
import UserInput from './UserInput/UserInput'
import UserOutput from './UserOutput/UserOutput'

class App extends Component {
  
  state={
    outputs: [
      { username: "dinhoin"}
    ]
  }

  changedHandler = (event) => {
    this.setState({
      outputs: [
        { username: event.target.value}
      ]
    } )
  }

   render() {
    const style = {
      backgroundColor: "grey",
      border: "1px solid black",
      padding: "8px",
      color: "white",
      textAlign: "center",
      backgroundImage: "url('https://picsum.photos/id/237/536/354')",
      backgroundPosition: "center",
      height: "100vh",
      width: "100%",
      display: "flex",
      flexDirection: "column",
      justifyContent: "center",
      alignItems: "center"
    }
    return (
      <div style={style}>
        <UserOutput username={this.state.outputs[0].username} ></UserOutput>
        <UserOutput username={this.state.outputs[0].username}></UserOutput>
        <UserOutput username={this.state.outputs[0].username}></UserOutput>
        <UserInput changed={this.changedHandler} username={this.state.outputs[0].username}></UserInput>
      </div>
    );
  }
}

export default App;
