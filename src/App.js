import React from 'react';
import './App.css';
import Hello from './components/hello';
import Counter from './components/Counter';
import ListCustomer from './components/ListCustomer';
import Search from './components/hooks/Search';
import ListCustomersFunc from './components/hooks/ListCustomers';
import ReduxCounter from './components/ReduxCounter';
import Register from './components/Register';
import {BrowserRouter as Router, Route, Link} from 'react-router-dom';
//import {MemoryRouter as Router, Route, Link} from 'react-router-dom';
import CustomerDetails from './components/hooks/CustomerDetails';


function App() {
  return (
    <div className="App">
      <header className="App-header">
      </header>
    <Router>
       <section >
         <nav>
           <ul>
               <li>
               <Link to="/" >Home </Link>
               </li>
               <li>
               <Link to="/counter" >Counter </Link>
               </li>
               <li>
               <Link to="/redux" >Redux </Link>
               </li>
               <li>
               <Link to="/search" >Search</Link>
               </li>
               <li>
               <Link to="/customers" >Customers</Link>
               </li>
               <li>
               <Link to="/register" >Register</Link>
               </li>
          </ul>
          </nav>
      </section>
      <section>
             <Route  path="/" exact  render={()=> <Hello message="React Router" />} />
             <Route path="/counter" component={Counter}/>
             <Route path="/redux" component={ReduxCounter}/>
             <Route path="/search" component={Search}/>
             <Route path="/customers" exact component={ListCustomersFunc}/>
             <Route path="/customers/:id" component={CustomerDetails}/>
             <Route path="/register" component={Register}/>
           </section>
  </Router>

      {/*<Hello message="World"/>*/}
  {/*<div><Counter title="MyJS"/></div>*/}
  {/*<Counter title="Count"/>*/}
 { /*<ListCustomer/>*/ }
 {/*<Search/>*/}
 {/*<ListCustomersFunc/>*/}
  { /*<ReduxCounter/>*/
     /*<Register/>*/}
    </div>
  );
}

export default App;
