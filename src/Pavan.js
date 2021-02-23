import React, {Component} from 'react'


 class Pavan extends Component {
     state ={message:'hello'}
    /*  constructor () {
         super()
     this.state = {message:'hello'}
     } */
     Pavani = () => this.setState({message:'I love you'})

    render(){
        return (
            <div>
                <h1>{this.props.name[1]}</h1>
                <h1>i am learning </h1>
                <h1>{this.state.message}</h1>
                <button onClick={() => this.Pavani()}>click</button>
            </div>
        )
    }
}

export default Pavan
