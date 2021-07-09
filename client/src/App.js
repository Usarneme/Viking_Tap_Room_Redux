import React, { Component } from 'react'
import { v4 as uuid } from 'uuid'

// Redux store connector
import { connect } from 'react-redux'
// Redux actions
import { ADD, UPDATE, DELETE } from './actions/kegs'

// Pages
import Home from './pages/Home'
import Kegs from './pages/Kegs' // view all kegs
import Keg from './pages/Keg' // view single keg by ID

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
  // getKegsFromStorage = () => {
  //   return JSON.parse(localStorage.getItem('viking_tap_room_kegs')) || null
  // }

  // setKegsToStorage = () => {
  //   localStorage.setItem('viking_tap_room_kegs', JSON.stringify(this.props.kegs))
  // }

  createNewKeg = (name, price, brand, alcoholContent) => {
    const { dispatch } = this.props
    const action = {
      type: ADD,
      name: name,
      brand: brand,
      price: Number(price),
      alcoholContent: Number(alcoholContent),
      id: uuid(),
      pintsRemaining: 124
    }
    dispatch(action)
  }

  sellPint = id => {
    const { dispatch } = this.props
    const kegCopy = this.props.kegs.filter(k => k.id === id)[0]
    kegCopy.pintsRemaining -= 1
    const action = {
      type: UPDATE,
      ...kegCopy
    }
    dispatch(action)
  }

  render() {
    return (
      <div>
        <Router>
          <Navbar />
          <Switch>
            <Route path="/kegs/:id">
              <Keg kegs={this.props.kegs} sellPint={id => this.sellPint(id)} />
            </Route>
            <Route path="/kegs">
              <Kegs kegs={this.props.kegs} createNewKeg={this.createNewKeg} sellPint={id => this.sellPint(id)} />
            </Route>
            <Route path="/">
              <Home kegs={this.props.kegs} />
            </Route>
          </Switch>
        </Router>
        <Footer />
      </div>
    )
  }
}

// Connect Redux store/state to App via App props
const mapStateToProps = state => state
App = connect(mapStateToProps)(App)

export default App
