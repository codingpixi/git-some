import React, { Component } from 'react';
import axios from 'axios';
import User from './User';
import logo from './logo.svg';
import './App.css';

class App extends React.Component {

constructor() {
  super()
  this.state = {
    user: {}
  }
  this.focus = this.focus.bind(this);
}


//life cycle method
componentDidMount () {
  //runs when the component is rendered for the 1st time
  //make ajax calls here and set state with them
  axios.get('https://api.github.com/users/ddsheard').then(response => {
    console.log(response.data)
    this.setState({user: response.data})
  })
}

focus() {
  this.textInput.focus();
  // console.log(this.textInput.value);
  axios.get('https://api.github.com/users/' + this.textInput.value)
  .then (response => {
    this.setState({user: response.data})
  })
}
// +this.state.user.login

  render() {

    // const gitApi = this.state.user;
    // if (gitApi.) {

    return (
      <div className="GithubApp">
        <div className="input">
          <input
            type="text"
            ref={(input) => {this.textInput = input;}}/>
          <input
            type="button"
            value="select github user"
            onClick={this.focus.bind(this)}
          />
        </div>
        <div>
          <h1>{this.state.user.name}</h1>
          <p>{this.state.user.login}</p>
          <img src={this.state.user.avatar_url} alt="github user image"/>
          <br />
          <a href={this.state.user.html_url} target="_blank">Visit my github repository</a>
          <br />
          <a href={this.state.user.blog}>Blog</a>
          <p>Location: {this.state.user.location}</p>
          <p>{this.state.user.hireable ? "Hireable: Yes" : "Hireable: No"}</p>
        </div>
      </div>
    );
  // } else {
  //   return null
    }
};

export default App;
