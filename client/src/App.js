import React, { Component } from 'react'

// Pages
import Home from './pages/Home'
import Kegs from './pages/Kegs' // view all kegs
import Keg from './pages/Keg' // view single keg by ID

// Components
import Footer from './components/Footer'
import Navbar from './components/Navbar'

// Helpers/default data
import { kegs as defaultKegs } from './defaultKegs.json'

// Router
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom"

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      kegs: this.getKegsFromStorage() || defaultKegs
    }
  }

  getKegsFromStorage = () => {
    return JSON.parse(localStorage.getItem('viking_tap_room_kegs')) || []
  }

  setKegsToStorage = () => {
    localStorage.setItem('viking_tap_room_kegs', JSON.stringify(this.state.kegs))
  }

  render() {
    return (
      <Router>
        <Navbar />
        <Switch>
          <Route path="/">
            <Home />
          </Route>
          <Route path="/kegs">
            <Kegs />
          </Route>
          <Route path="/kegs/:id">
            <Keg />
          </Route>
        </Switch>
      <Footer />
    </Router>
    )
  }
}

export default App
