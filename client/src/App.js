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
      kegs: defaultKegs
    }
  }

  getKegsFromStorage = () => {
    return JSON.parse(localStorage.getItem('viking_tap_room_kegs')) || null
  }

  setKegsToStorage = () => {
    localStorage.setItem('viking_tap_room_kegs', JSON.stringify(this.state.kegs))
  }

  render() {
    console.log(defaultKegs)

    return (
      <div>
        <Router>
          <Navbar />
          <Switch>
            <Route path="/kegs">
              <Kegs kegs={this.state.kegs} />
            </Route>
            <Route path="/kegs/:id">
              <Keg kegs={this.state.kegs} />
            </Route>
            <Route path="/">
              <Home kegs={this.state.kegs} />
            </Route>
          </Switch>
        </Router>
        <Footer />
      </div>
    )
  }
}

export default App
