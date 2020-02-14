import { createStore,applyMiddleware,compose,combineReducers } from 'redux';
import ReduxThunk from 'redux-thunk';
import {reducer as formReducer} from 'redux-form';
//initial state
const initState = {
    message: "Hello redux",
    count: 5,
    customers : []

}
//Reducer

const reducer = (state = initState, action) => {
    //update the state and return new state
    if (action.type === "INC_CTR") {
        return {
            ...state,
             count: state.count + 1
        }

    }
    if (action.type === "DEC_CTR") {
        return {
            ...state,
            count: state.count - 1
        }

    }
    if (action.type === "UPD_CTR_BY") {
        return {
            ...state,
            count: state.count + action.value
        }

    }

    if(action.type === "FETCH_CUSTOMERS"){
        return {
            ...state,
            customer : action.payload
        }

    }

    return state; //returns inital state to the calling component
}

//It is sequence of middlewares
const logger = (store)=>{
    return (next) => {

        return (action)=>{

            console.log("Action: ", action);
            console.log("State before: ", store.getState());
            const result = next(action);  
            console.log("State after: ", store.getState());
            return result;
        }
    }
}

//combine reducers 
const rootReducer = combineReducers({
    app : reducer, 
    form : formReducer

});

//named export
//export const store= createStore(reducer,window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());

//export const store = createStore(reducer,applyMiddleware(logger,Reduxthunk));


const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
export const store = createStore(rootReducer, composeEnhancers(applyMiddleware(logger, ReduxThunk)));