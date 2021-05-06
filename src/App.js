import React, { Component } from 'react'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import axios from 'axios'
import Header from './components/Header/Header'


class App extends Component {
  render() {
    return (
      <>
      <Header/>
      <Router>
        {/* <Route exact path="/" component= */}
      </Router>
      </>
    
    )
  }
}

export default App