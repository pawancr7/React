
import React,{ Component } from "react";

class Employee extends Component{
    state= {name :"dany",
             id:"43",
              salary:"2000"
}
 change = (value) =>{
      this.setState({
          name:value,
          
      })
 }
render (){
    return(
        <>
        <h1> 
            Employee name:{this.state.name} 
        </h1>
        <h2>
            Employee id:{this.state.id}
        </h2>
        <h3>
            Employee salary:{this.state.salary}
        </h3>
        <button onClick={this.change.bind(this,"rajesh")}> click me

        </button>
        </>
    )
}
}

export default Employee; 