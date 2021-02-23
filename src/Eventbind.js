import React, { Component } from 'react'

class Eventbind extends Component {
    state={hero:'Surya'}
    Superstar () {this.setState({hero:'karthi'})}
    /* Superstar = () => this.setState({hero:'karthi'}) */
    render() {
        return (
            <div>
                <h1>{this.state.hero}</h1>
                {/* <button onClick={() => this.Superstar()}>brothers</button> */}
                <button onClick={this.Superstar.bind(this)}>brothers</button>
            </div>
        ) 
    }
}

export default Eventbind

