
import React from 'react';
const hello = (props)=> {
    //return the jsx
    return (
    <div>
     <h4>Hello {props.message}</h4>
     <p>This is a function component</p>
     <p>Generated at {new Date().toTimeString()}</p>

    </div>);
}


export default hello;