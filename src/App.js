import React, {Component} from 'react'
import Beers from './beers'
// import List from './List'

import './App.css';

class App extends Component{
  constructor() {
    super()
    console.log("I am the constructor")
    this.state = {
      beers: []
    }
  }

  componentDidMount() {
    console.log("I mounted")
    fetch("https://api.punkapi.com/v2/beers").then((resolve) => resolve.json()).then((data) => {
      this.setState({
        beers: data
      })
    })
  }

  componentDidUpdate() {
    console.log("I update")

    console.log("beers", this.state.beers)
  }

  render() {
      return (
      <div className="App">
        <Beers beers={this.state.beers}/>
        {/* <List list={this.state.beers}/> */}
      </div>
    );
  }

}

export default App;
