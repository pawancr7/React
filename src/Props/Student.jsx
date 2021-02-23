import React, { Component } from 'react';


class Student extends Component{

          name="saske";
          id="45";
          age= "33";
render(){
return(
           <>
<h1>
    {this.name}
</h1>
<h2>{this.props.name}</h2>
<h2>{this.props.id}</h2>


           </>       
    )
 }
}

 export default Student;