import React from 'react';
import './SearchButton.css';



const SearchButton = React.forwardRef((props,ref) =>{


   const {title,...otherProps} = props; 
    const getText = () =>{
        if(props.title){

            return props.title;
        }else if(props.children){
            return props.children
        }else return "Search"
    }



    return(

    <button ref={ref} className= "search" {...otherProps}>{getText()}</button>
    );

});


export default SearchButton;