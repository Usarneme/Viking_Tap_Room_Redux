import React, { Component } from 'react'

// Pages
import Home from './pages/Home'
import Kegs from './pages/Kegs' // view all kegs

// Components
import Footer from './components/Footer'
import Navbar from './components/Navbar'

// Router
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom"

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {}
  }

  render() {
    return (
      <Router>
        <Navbar />
        <Switch>
          <Route path="/kegs">
            <Kegs />
          </Route>
          <Route path="/">
            <Home />
          </Route>
        </Switch>
      <Footer />
    </Router>
    )
  }
}

export default App
