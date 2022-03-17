import React, { Component } from 'react'
import './@fortawesome/fontawesome-free/css/all.css'
import './App.css'
import Main from './components/Main'
import OldHome from './components/Old/OldHome'

class App extends Component {
  render() {
    return (
      <div className="App">
        <Main />
      </div>
    )
  }
}

export default App
