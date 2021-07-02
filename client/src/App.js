
      import React, { Component } from 'react'
      import Home from './pages/Home'
      import Footer from './components/Footer'
      import Navbar from './components/Navbar'
      class App extends Component {
        constructor(props) {
          super(props)
          this.state = {
            currentPage: this.getCurrentLocation()
          }
        }
        getCurrentLocation = () => {
          return window.location.pathname.slice(1)
        }
        navigateTo = (event, location) => {
          event.preventDefault()
          this.setState({currentPage: location})
          window.history.replaceState({}, 'Squash Shoes', location)
        }
        render() {
          return (
            <div>
              <Navbar />
              <Home />
              <Footer />
            </div>
          )
        }
      }
      export default App
    
