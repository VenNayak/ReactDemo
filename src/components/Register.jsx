import React from 'react';
import{Field,reduxForm} from 'redux-form';

let RegisterForm = (props) => {

    return (
    <div>
             <form onSubmit={props.handleSubmit}> 
                    <div>
                        <label htmlFor="name"> Name </label>
                        <Field name ="name" component = "input" type= "text"/>
                        </div>  
                        <div>
                        <label htmlFor="name"> Email </label>
                        <Field name ="email" component = "input" type= "email"/>
                        </div>  
                        <div>
                            <button type= "submit" disabled={props.pristine || props.invalid}>Save</button>
                            <button type ="button" disabled={props.pristine || props.invalid} 
                            onClick = {props.reset}>Reset </button>
                        </div>
             </form>   

    </div>
    )
}
RegisterForm = reduxForm({form: 'register'})(RegisterForm);


const Register = () => {

    const save = (values) => {

        console.log(values);
    }

return (

       <div>
           <h2>Register</h2>
           <RegisterForm onSubmit={save()}/>
       </div>
);

}





export default Register;    

