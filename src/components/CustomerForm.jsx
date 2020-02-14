import React from 'react';
import { Customer } from '../model/Customer';
import {PropTypes} from 'prop-types';


class CustomerForm extends React.Component {
    
    state={
        customer : new Customer(0,"","")

    }

    constructor(props){
                super(props);
                if(this.props.customer){
                    this.state.customer = this.props.customer;
                }
                this.initState = {...this.state};
    }
    change=(evt,propName)=>{
            const value= evt.target.value;
            const customer = {...this.state.customer};
            
            customer[propName]  = propName === "id" ?  Number(value) :value;
            this.setState({
                customer 
            });



    }

    save=()=>{
        this.props.onSave(this.state.customer);
        this.setState(this.initState);
    }
    
    cancel=()=>{
        this.props.onCancel();
    }

    // to get component to update after new props received
    //  static getDerivedStateFromProps(nextProps, currentState){

    //     if(nextProps.customer && nextProps.customer.id!== currentState.customer.id){
    //            //return new state
    //            return {
    //                ...currentState,
    //                customer : nextProps.customer
    //            }

    //     }else{
    //         return null; //no state change
    //     }
    //  }
     render(){
         return (
             <div>
                    <fieldset><div>
                        <p>ID</p>
                        </div> 
                    <div><input type ="number" required pattern='{/d{1,3}}'  value={this.state.customer.id} onChange={(evt)=>this.change(evt,"id")}/></div>
                    <div>
                        <p>Company</p>
                        </div>
                        <div><input type ="text" required pattern='{[A-Za-Z]{2,}}' value={this.state.customer.name } onChange={(evt)=>this.change(evt,"name")}/></div>
                        <div>
                        <p>Location</p>
                        </div>
                        <div><input type ="text" value={this.state.customer.location} onChange={(evt)=>this.change(evt,"location")}/></div>
                        
                        <div>
                           <button onClick= {this.save}> Save </button>&nbsp;
                           <button onClick= {this.cancel}>Cancel</button> &nbsp;
                     </div>
                        </fieldset>
              </div>   

         );
     }

}


CustomerForm.propTypes = {
    customer : PropTypes.instanceOf(Customer),  
        onSave : PropTypes.func.isRequired,
        onCancel : PropTypes.func,
        onEdit : PropTypes.func

}
export default CustomerForm;