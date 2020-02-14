import React,{Component,PureComponent} from 'react';
import { Customer } from '../model/Customer';
import './ListCustomer.css';
import CustomerForm from './CustomerForm';
import Axios from  'axios';
import { Link } from 'react-router-dom';

class ListCustomer extends PureComponent {
    

    state ={
        data :[],
        addMode : false,
        selectedCustomer :null
    }
    constructor(props){
        super(props);
        // this.state.data.push(new Customer(1, "Facebook", "Bangalore"));
        // this.state.data.push(new Customer(2, "Google", "Hyderabad"));
        // this.state.data.push(new Customer(3, "Microsoft", "Bangalore"));
        // this.state.data.push(new Customer(4, "Reliance", "Mumbai"));
        this.url = "https://calm-beach-18228.herokuapp.com/customers";

    }
   
    deleteCustomer=async (i) => {
                 
              const deleteUrl = this.url + "/" + this.state.data[i].id;
              try{
              await Axios.delete(deleteUrl);
              alert("deleted");  
               //state has to be immutable
                const updatedCustomers = [...this.state.data];
                updatedCustomers.splice(i,1);
                this.setState({data:updatedCustomers});
              }catch(e){alert("failed");}

    }

    componentWillMount(){
        console.log("[ListCustomers] componentWillMount");

    }

    async componentDidMount(){
        console.log("[ListCustomers] componentDidMount");
        // Axios.get(this.url).then (
        //     (resp)=>{ 
        //           console.log("success",resp);
        //      },
        //      (err) =>{

        //         console.log("error",err);
        //      });
        try{
        const resp = await Axios.get(this.url);
     
        const customers = resp.data.map(item => new Customer(item.id, item.name, item.location));
        this.setState({data:customers});
        }catch(error){}
    }
    componentWillReceiveProps(){
        console.log("[ListCustomers] componentWillReceiveProps");
    }

    // shouldComponentUpdate(){
    //     console.log("[ListCustomers] ShouldComponentUpdate");
    //     return true;
    // }
    componentWillUpdate(){
        console.log("[ListCustomers] componentWillUpdate");
    }
    componentDidUpdate(){
        console.log("[ListCustomers] componentDidUpdate");
    }
    componentWillUnmount(){
        console.log("[ListCustomers] componentwillUnMount");
    }


    editCustomer=(cust) =>{
            this.setState({selectedCustomer : cust});

    }

    renderCustomers(){
              return this.state.data.map((customer,i) =>{
                return  <div key={customer.id} className="customer">
                        <p> ID : {customer.id} </p>
                        <p> Name : {customer.name}</p>
                        <p>Location : {customer.location}</p>
                        <div>
                        {/*<button onClick={this.deleteCustomer.bind(this,index)}>Delete</button>*/}
                        <button onClick={()=>this.deleteCustomer(i)}>Delete</button>
                        &nbsp;
                        <button onClick={()=> {this.editCustomer(customer)}}>Edit</button>
        
                       </div>
                </div>
                
             })

    }

    addNew = (evt)=> {
       evt.preventDefault();
       this.setState({addMode:true});
    }

    addCustomer = async (customer)=>{
        try{
       const response = await Axios.post(this.url, customer);
       alert("saved");
        const updatedCustomer = [...this.state.data];
        updatedCustomer.push(customer);
         this.setState({data:updatedCustomer});
         this.setState({addMode:false});
        }catch(e){alert("error");}
    }

    cancelForm =()=>{
        this.setState({addMode:false});
    }

    editUpdate = async(customer)=>{
              try{
        await Axios.put(this.url,customer);
        alert("Updated");
        const updatedCustomers= [...this.state.data];
        const index = updatedCustomers.findIndex(cust => cust.id === customer.id);
        updatedCustomers[index] = customer;

        this.setState({
          data : updatedCustomers,
          selectedCustomer : null

        });
    }catch(e){
        alert("failed");
    }
    }

     render(){
         return ( 
            <div>
                <h2>Customers</h2>

                <div>
                    <a href="#" onClick={this.addNew}>Add New</a>
                </div>
                <div style={{display : 'flex', flexFlow: 'row wrap', justifyContent:'center'}}>
                 {
                      this.state.data.length !==0 ? this.renderCustomers() : <p>No Records</p>
                 }
                 
                </div>
               {this.state.addMode ?  <CustomerForm onSave={this.addCustomer} onCancel={this.cancelForm} /> : null}

               {this.state.selectedCustomer ? <CustomerForm key= {this.state.selectedCustomer.id} customer= {this.state.selectedCustomer} onCancel={this.cancelForm} onSave = {this.editUpdate}/> : null}
            </div>

         );
     }

}

export default ListCustomer;