import React, { Component } from 'react'
import { v4 as uuid } from 'uuid'

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
    return JSON.parse(localStorage.getItem('viking_tap_room_kegs')) || null
  }

  setKegsToStorage = () => {
    localStorage.setItem('viking_tap_room_kegs', JSON.stringify(this.state.kegs))
  }

  createNewKeg = async (name, price, brand, alcoholContent) => {
    const newKeg = {
      name: name, brand: brand, price: Number(price), alcoholContent: Number(alcoholContent), id: uuid(), pintsRemaining: 124
    }
    const newKegsList = this.state.kegs.concat(newKeg)
    await this.setState({ kegs: newKegsList })
    this.setKegsToStorage()
  }

  sellPint = async id => {
    const kegCopy = this.state.kegs.filter(k => k.id === id)[0]
    kegCopy.pintsRemaining -= 1
    const kegsListCopy = this.state.kegs.filter(k => k.id !== id)
    kegsListCopy.push(kegCopy)
    await this.setState({ kegs: kegsListCopy })
    this.setKegsToStorage()
  }

  render() {
    return (
      <div>
        <Router>
          <Navbar />
          <Switch>
            <Route path="/kegs/:id">
              <Keg kegs={this.state.kegs} sellPint={id => this.sellPint(id)} />
            </Route>
            <Route path="/kegs">
              <Kegs kegs={this.state.kegs} createNewKeg={this.createNewKeg} sellPint={id => this.sellPint(id)} />
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
