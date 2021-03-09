
import React, { Component } from 'react';
import './App.css';
import UserInput from './UserInput/UserInput'
import UserOutput from './UserOutput/UserOutput'

class App extends Component {
  
  state={
    outputs: [
      { username: "dinhoinz"}
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
    const style2 = {
      backgroundColor: "#0b0b0dd4",
      padding: "30px"
    }
    return (
      <div style={style}>
        <div style={style2}>
<li>Create TWO new components: UserInput and UserOutput</li>
<li>UserInput should hold an input element, UserOutput two paragraphs</li>
<li>Output multiple UserOutput components in the App component (any paragraph texts of your choice)</li>
<li>Pass a username (of your choice) to UserOutput via props and display it there</li>
<li>Add state to the App component (=> the username) and pass the username to the UserOutput component</li>
<li>Add a method to manipulate the state (=> an event-handler method)</li>
<li>Pass the event-handler method reference to the UserInput component and bind it to the input-change event</li>
<li>Ensure that the new input entered by the user overwrites the old username passed to UserOutput</li>
<li>Add two-way-binding to your input (in UserInput) to also display the starting username</li>
<li>Add styling of your choice to your components/ elements in the components - both with inline styles and stylesheets</li>
</div>
        <UserOutput username={this.state.outputs[0].username} ></UserOutput>
        <UserOutput username={this.state.outputs[0].username}></UserOutput>
        <UserOutput username={this.state.outputs[0].username}></UserOutput>
        <UserInput changed={this.changedHandler} username={this.state.outputs[0].username}></UserInput>
      </div>
    );
  }
}

export default App;
