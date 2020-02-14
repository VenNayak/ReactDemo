import React from 'react';
import {connect} from 'react-redux';

//import {createINCAction,createDECRAction} from '../redux/actionCreators';
import * as actionCreators from '../redux/actionCreators';
const ReduxCounter = (props) => {
   const {ctr,inc,decr,fetch,customers} = props; //destucturing props.ctr to map to ctr BO
     return (

        <div>
            <h2>Redux Counter </h2>
            <h4>Count: {ctr} </h4>

            <div> 
                 <button onClick= {inc}> Increment </button>
                 <button onClick = {decr}> Decrement </button>
                 <button onClick = {fetch}> Fetch </button>
            </div>
            <div>
            {
                    customers.map(cust => { 
                        return(    
                            <div>
                             <p>ID : {cust.id} </p>
                             <p>Name : {cust.name}</p>
                            </div> 
                        )
                     })
                    
                   }
            </div>
       </div>
     )


}
//maps the redux state to the component props. get handle to state
const mapStateToProps = (state) => {
//redux state.count is now available as props.ctr
   return {
       //ctr : state.count
       ctr:state.app.count,
       customers: state.app.customers
   }

}
//get handle to dispatch for the below events after dispatching the events to store
const mapDispatchToProps = (dispatch) => {

    return {
        inc: () => {dispatch(actionCreators.createINCAction())},
        decr:() =>{dispatch(actionCreators.createDECRAction())},
        fetch:() =>{dispatch(actionCreators.createFetchCustomers()) }
    }
}


//connect connects to the store and pass the props to redux state and dispatches the actions to store

export default connect(mapStateToProps,mapDispatchToProps)(ReduxCounter);

