import React from 'react'

function Siddiq(props) {
   let {name ,nears} = props
   

    return (
        <div>
            <h1>{nears}</h1>
            <h1>{name[0]}</h1>
        </div>
    )
}

export default Siddiq
