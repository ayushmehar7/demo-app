import React from "react"
import './App.css';

class App extends React.Component{
  constructor(){
    super()
    this.state = {
      pressed : 0
    }
  }
  render(){
    alert("This is a static page!")
    return (
      <div className="App">
        <h1>Welcome to Our Demo App</h1>
        <button className = "button" onClick = {()=>{
          this.setState({pressed : this.state.pressed+1})
        }}>Click Here</button>
        <h2>Button Pressed : {this.state.pressed} Times!</h2>
      </div>
    )
  }
}

export default App;
