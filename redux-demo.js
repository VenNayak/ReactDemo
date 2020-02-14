//import {createStore} from 'redux';
const redux = require('redux');
const createStore = redux.createStore;




//initial state
const initState= {
   message : "Hello redux",
   count : 5

}
//Reducer

const reducer = (state=initState,action) => {
    //update the state and return new state
      if(action.type === "INC_CTR"){
   return {
        ...state,
        count: state.count+1
   }

      }
      if(action.type === "DEC_CTR"){
        return {
             ...state,
             count: state.count-1
        }
     
           }
           if(action.type === "UPD_CTR_BY"){
            return {
                 ...state,
                 count: state.count + action.value
            }
         
               }
}
//store
const store = createStore(reducer);
console.log("State :" + store.getState());
//subscribe
store.subscribe(()=>{
    console.log("Subscribe :" + store.getState());
})
//Dispatch Actions

store.dispatch({
    type : "INC_CTR"
});

console.log("State: ", store.getState());
store.dispatch({
    type : "DECR_CTR"
});

console.log("State ", store.getState());

store.dispatch({
    type : "UPD_CTR_BY",
    value: 10
});

console.log("State ", store.getState());
