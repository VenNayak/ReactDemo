import React, {useState,useContext,useRef} from 'react';
import Axios from 'axios';
import SearchButton from '../Search Button';
import {AppContext} from '../../context/AppContext';

const Search = () => {

    //ES6 Destructuring
    //declaring state variables
    const[searchKey,setSearchKey] = useState("");
    const[results,setResults] = useState([]);
    const context = useContext(AppContext);
    const btnRef = useRef(null);

   
     const change = (evt) => setSearchKey(evt.target.value);
     
     const search = async () => {
             const url = "https://en.wikipedia.org/w/api.php";
             const params = {
                action : "opensearch",
                origin : "*",
                format : "json",
                limit : 20,
                search :searchKey

             };

             try{
                const resp = await Axios.get(url, {params:params});
                console.log(resp);
                setResults(resp.data);

             }catch(e){

                console.log("Error in search call.." + e);
             }
     }


    const renderResults= ()=>{
        return results[1].map((item,index)=>{
            return (
                <div key={index}>
                    <p>{item}</p>
                </div>

            );

    });

    }   
    
  return (
         <div>
               <h3>Wiki Search </h3> <div>
                  <p>App name : {context.appName} </p>
                  <p> User Name : {context.userName}</p> 

               </div>
               <input type = "search" placeholder = "Search" 
               value ={searchKey} onChange= {change}/>
               <p>Search results for {searchKey}</p>
               <br/>
                 <SearchButton onClick={search} ref={btnRef} />
                 <SearchButton onClick={search} >Find</SearchButton>
                 <SearchButton onClick={search} title="Lookup"/>
               <div>
                        {results.length > 0  ? renderResults() : "No Results"}
               </div>
        </div>

  )

 
}

export default Search;