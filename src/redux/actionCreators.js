import axios from 'axios';

export const createINCAction = () => {

    return {
        type : "INC_CTR"
    }
}


export const createDECRAction = () => {
 return {
    type : "DEC_CTR"
 }

}

//if action is object then it is directly passed to reducer
//if action is function then it is intercepted by redux thunk to make API call for eg and new action is created and sent to reducer
export const createFetchCustomers = () => {
 
    return async (dispatch) => {

        const url = "https://calm-beach-18228.herokuapp.com/customers";
        try {
            const resp = await axios.get(url);
            dispatch({
                type: "FETCH_CUSTOMERS",
                payload: resp.data
            })

        } catch (error) {
            
        }

    }
   
   }