import React from 'react';
import ListCustomers from './hooks/ListCustomers';


//HOC is a single function ==> receives the component to wrap
const SimpleHOC = (WrappedComponent) => {
        //returns a new React component
    return (props) => {
        return (

            <div style = {{border: "2px solid blue", margin : "7px"}}>
                <WrappedComponent {...props}/>
            </div>
        )

    }
}


export default SimpleHOC;