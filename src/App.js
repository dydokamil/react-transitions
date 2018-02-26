import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import { CSSTransition, TransitionGroup } from 'react-transition-group'

import logo from './logo.svg'
import './App.css'

const Slide = ({ children, ...props }) => (
  <CSSTransition {...props} timeout={100000} classNames="slideBack">
    {children}
  </CSSTransition>
)

class App extends Component {
  constructor(...args) {
    super(...args)
    this.state = { show: false }

    setTimeout(() => {
      this.setState({ show: !this.state.show })
    }, 0)
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <Slide in={this.state.show}>
            <h1 className="App-title">Welcome to React</h1>
          </Slide>
        </header>
        <Slide in={this.state.show}>
          <p className="App-intro">
            To get started, edit <code>src/App.js</code> and save to reload.
          </p>
        </Slide>
        <Link to="/app-fade">Next</Link>
      </div>
    )
  }
}

export default App
