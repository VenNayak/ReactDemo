import React from 'react';

const CustomerDetails = (props) => {

    console.log("customer Details ",props);

    const back = ()=>{

        props.history.goBack();
    }

 return (
      <div> 
                    <h3>Customer Details for {props.match.params.id} </h3>

                    <br/> <button onClick={back}>Back</button>
          </div>
     
 );

}


export default CustomerDetails;