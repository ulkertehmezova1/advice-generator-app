

import React, { Component } from 'react'
import axios from 'axios'

export class App extends Component {
    state ={  advice:""  }
    componentDidMount(){
this.fetchAdvice();
    }
    fetchAdvice =()=>{
        axios.get("https://api.adviceslip.com/advice")
        .then(response=>{
            const{advice} = response.data.slip
            this.setState({
                advice
            })
        })
        .catch(error=>{
            console.log(error)
        })
    }
    handleClick =()=>{
       return this.fetchAdvice()
    }
  render() {
      const{advice} =this.state
    return (
      <div className ='app'>
<div className ="card">
<h1 className ="heading">{advice}</h1>
<button className="button" onClick={this.handleClick}>
    <span>
    give me advice!
    </span>
    </button>
</div>
      </div>
    )
  }
}

export default App