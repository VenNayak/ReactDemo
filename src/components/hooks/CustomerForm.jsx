import React,{useState,useEffect,useRef} from 'react';
import { Customer } from "../../model/Customer";
import {withRouter} from 'react-router-dom';



const CustomerForm = (props)=>{
    const[customer,setCustomer] = useState(new Customer(0,"",""));
    const nameInputRef = useRef(null);
    const idInputRef = useRef(null);

    console.log("Customer Form :" ,props);
  //for validation
    useEffect(()=> {
           console.log("name effect");
    if(nameInputRef.current.validity.valid){
        nameInputRef.current.style ="";
    }else{
        nameInputRef.current.style = "border: 2px solid red";
    }
    },[customer.name]);

    
    
    const change=(evt,propName)=>{
            const value= evt.target.value;
            const cust = {...customer}; 
            
            cust[propName]  = propName === "id" ?  Number(value) :value;
            setCustomer(cust);
    }


   const save = ()=>{

    if(props.onSave){

       // if(nameInputRef)
    }
    props.onSave(customer);

   }
   const cancel =()=>{
       props.onCancel();
   }

    return (
                <div>
                    <fieldset><div>
                        <p>ID</p>
                        </div> 
                    <div><input ref={idInputRef} type ="number" value={customer.id} onChange={(evt)=>change(evt,"id")}/></div>
                    <div>
                        <p>Company</p>
                        </div>
                        <div><input ref={nameInputRef} type ="text" value={customer.name } onChange={(evt)=>change(evt,"name")}/></div>
                        <div>
                        <p>Location</p>
                        </div>
                        <div><input type ="text" value={customer.location} onChange={(evt)=>change(evt,"location")}/></div>
                        
                        <div>
                            <button onClick= {save}> Save </button>&nbsp;
                            <button onClick= {cancel}>Cancel</button> &nbsp;
                            </div>
                        </fieldset>
                </div>   

        );


}

export default withRouter(CustomerForm);