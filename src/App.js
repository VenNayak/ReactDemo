import React,{Suspense} from 'react';
import './App.css';
import logo from './logo.svg';
import Hello from './components/hello';
import Counter from './components/Counter';
import ListCustomer from './components/ListCustomer';
//import Search from './components/hooks/Search';
import ListCustomersFunc from './components/hooks/ListCustomers';
import ReduxCounter from './components/ReduxCounter';
import Register from './components/Register';
import {BrowserRouter as Router, Route, Link} from 'react-router-dom';
//import {MemoryRouter as Router, Route, Link} from 'react-router-dom';
import CustomerDetails from './components/hooks/CustomerDetails';
import { Grid } from '@material-ui/core';
import Sidebar  from './components/SideBar';
import {routes} from './Routes/Routes';
import ReducerDemoError from './components/hooks/ReducerDemoError';
import {AppContext} from './context/AppContext';
import CircularProgress from '@material-ui/core/CircularProgress';
import ReactPortalDemo from './components/ReactPortalDemo';
import ProtectedRoute from './components/ProtectedRoute';

//code splitting - below approach works only for default exports
const Search = React.lazy(()=> import('./components/hooks/Search'));

function App() {
  return (
    <AppContext.Provider value={{appName : "The React App", userName : "Anil"}}>
    <div className="App">
      <Router>
        <Grid container>
          <Grid item xs={12}>
            <header className="App-header">
              <img src={logo} className="App-logo" alt="logo" />
            </header>
          </Grid>

          <Grid container>
            <Grid item xs={2}>
              <section>
                <Sidebar routes={routes}/>
         {/* <nav>
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
          </nav> */}
      </section>
      </Grid>
      <Grid item xs={10}>
      <section>
             <Route  path="/" exact  render={()=> <Hello message="React Router" />} />
             <Route path="/counter" component={Counter}/>
             <Route path="/redux" component={ReduxCounter}/>
             <Suspense fallback= {<CircularProgress/>}>
             <Route path="/search" component={Search}/> 
             </Suspense>
             <ProtectedRoute path="/customers" exact component={ListCustomersFunc}/>
             <Route path="/customers/:id" component={CustomerDetails}/>
             <Route path="/register" component={Register}/>
             <Route path="/reducerDemo" component={ReducerDemoError}/>
             <Route path="/portal" component={ReactPortalDemo}/>
           </section>
           </Grid>

</Grid>
</Grid>
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

</AppContext.Provider>
  );
}

export default App;
