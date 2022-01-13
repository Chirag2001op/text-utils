import React from "react";

export default function Alert(props) {
    const capitalize = (word) =>{
        const lower = word.toLowerCase();
        return lower.charAt(0).toUpperCase() + lower.slice(1);
    }
  return (
    <div style={{height:'50px'}}> {/*We are putting props.alert and the entire div in curly brace because we are writing javascript there*/}
    { props.alert && 
     <div className={`alert alert-${props.alert.type} alert-dismissible fade show`} role="alert">
        <strong>{capitalize(props.alert.type)} </strong> {props.alert.msg}
       </div>}{/* This means Only render alert when there is any alert props*/}
    </div>
    
  );
}
