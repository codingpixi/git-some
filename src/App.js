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
        <header className='App-header'>
          <p className="who">github who</p>

        </header>

        <div className="input">
          <input
            type="text"
            placeholder="Searh Github User"
            ref={(input) => {this.textInput = input;}}/>
          <input
            type="button"
            value="select github user"
            onClick={this.focus.bind(this)}
          />
        </div>
        <section className="container">
        <div className="githubUserInfo">
          <img src={this.state.user.avatar_url} className="img-circle" alt="github user image"/>
          <h1>{this.state.user.name}</h1>
          <p>&#64;{this.state.user.login}
          <br />
          <a href={this.state.user.html_url} target="_blank">Visit my github repository</a>
          <br />
          <a href={this.state.user.blog}>Blog</a>
          <br />
          Location: {this.state.user.location}
          <br/>
          Looking for a job:{this.state.user.hireable ? " Yes" : " No"}</p>
        </div>
        </section>
      </div>
    );
  // } else {
  //   return null
    }
};

export default App;
