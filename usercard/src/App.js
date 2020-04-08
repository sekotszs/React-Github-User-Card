import React from "react";
import "./App.css";
import axios from "axios";
import Usercard from "./usercard";


class App extends React.Component {
  constructor() {
    super();
    this.state = {
      userObject: null,
      followers:[],
    };
  }

  componentDidMount() {
    axios
      .get("https://api.github.com/users/sekotszs")
      .then((response) => {
        console.log(response);
        this.setState({
          userObject: response.data,
        });
      })
      .catch((error) => {
        console.log("the data didnt come");
      });
      
      axios
      .get("https://api.github.com/users/sekotszs/followers")
      .then((response) => {
        console.log(response);
        this.setState({
          followers: response.data,
        })
      })
      .catch((error) =>{
        console.log("the data didn't come")
      })
  }


  render() {
    return (<div>
      {this.state.userObject && <Usercard user={this.state.userObject} followers={this.state.followers}/>}
    </div>);
  }
}

export default App;
