import React, { Component } from 'react'
import ReactDOM from 'react-dom'
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import './styles/style.scss'

class App extends Component {
  render(){
    return <h1 className="test text-center">Init proj</h1>
  }
}

ReactDOM.render(<App />, document.getElementById('root'));