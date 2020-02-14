import React,{useState,useEffect} from 'react';
import Axios from 'axios';
import {Customer} from '../../model/Customer';
import '../ListCustomer.css';
import CustomerForm from './CustomerForm';
import SimpleHOC from '../SimpleHOC';
import {Link} from 'react-router-dom';
import CustomerView from './CustomerView';
import {useCallback} from 'react';


const ListCustomers = (props) => {

    const[data,setData] = useState([]);
    const[addMode,setAddMode] = useState(false);
    const[loaded,setLoaded] = useState(false);
    const[selectedCustomer,setSeletedCustomer] = useState(null);
    //static so no state
    const url = "https://calm-beach-18228.herokuapp.com/customers";

    //console.log("List Customers",props)

    useEffect(
        //equivalent to componentDidMount and componentDidUpdate
        ()=>{
            console.log("In effect");
           //IIFE Immediately invoked function expression so that async can be put without marking the use effect async
           (async ()=>{
               console.log("IIFE");
               try{
                const resp = await Axios.get(url);
                const customers = resp.data.map(item => new Customer(item.id, item.name, item.location));
                setData(customers);
                setLoaded(true);
                }
                catch(error){
                    alert("Error in get results");
                }
           })();



        return () => { 
                   //return equivalent to componentDidUnMount
                  console.log("In effect over");
      }

    },[]) ; //empty argument means effect runs only onc
    

    //useCallback is so that the function isnot recreated and changes onl when the dependency changes
    const deleteCustomer = useCallback(async (index) =>{
            alert("deleted");
            const updatedCustomers = [...data];
            updatedCustomers.splice(index,1);
            setData(updatedCustomers);

    },[data]);



    const editCustomer = useCallback(() => {},[]);

    const addNew = (evt) => {
        evt.preventDefault();
        setAddMode(true);
        
    }
    const renderCustomers = ()=>{
        return data.map((customer,i) =>{
          return ( <div key={customer.id} className="customer">
                  <div>
                  <CustomerView customer = 
                  {customer} index = {i} deleteCustomer = {deleteCustomer} editCustomer= {editCustomer} />
                  <button onClick={()=>deleteCustomer(i)}>Delete</button>
                  &nbsp;
                  <button onClick={()=>editCustomer(customer)}>Edit</button>
                  &nbsp;
                        <Link to={"/customers/"+customer.id}>Details</Link>
                  </div>
                  </div>);
          
       });
    }
    const addCustomer = async (customer)=>{
        try{
       const response = await Axios.post(this.url, customer);
       alert("saved");
        const updatedCustomer = [...data];
        updatedCustomer.push(customer);
          setData(updatedCustomer);
        }catch(e){alert("error");}
    }

    return(
            <div>
            <h2> List Customer with Hooks </h2>
            
                <div>
                        <a href="#" onClick={(evt)=>addNew(evt)} >Add New</a>
                        {addMode ? <CustomerForm onSave={addCustomer()}/> : null}
                </div>
                <div style={{display : 'flex', flexFlow: 'row wrap', justifyContent:'center'}}>
                    {
                        data.length !==0 ? renderCustomers() : <p>No Records</p>
                    }
                    
                </div>
                

            </div>
        );

}

export default SimpleHOC(ListCustomers);