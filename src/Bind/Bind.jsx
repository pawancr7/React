import React,{ Component } from "react";

class Bind extends Component{

    state ={
        msg:"Hello"
    }
    changeHandler=(value)=>{
        this.setState({
            msg:value
        })
    }
    render(){
        return(
            <><h1>Wishing You:{this.state.msg}</h1>
            <button className="btn btn-success" onClick={this.changeHandler.bind(this,"Good Morning")}>GM</button>
            <button className="btn btn-primary" onClick={this.changeHandler.bind(this,"Good Afternoon")}>GA</button>
            <button className="btn btn-info" onClick={this.changeHandler.bind(this,"Good Night")}>GN</button>
            </>
        )
    }
}
export default Bind;