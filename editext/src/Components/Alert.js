import React from 'react'

export default function Alert(props) {

	const capitalizeFirstCharOfType = (word) =>{
		const lower = word.toLowerCase();
		return lower.charAt(0).toUpperCase() + lower.slice(1);
	}

  return (
	  // props.alert &&  - runs first if not evaluate then all the other are stop and not evaluated
	  // same as if else condition 
	  // This happens because all the JSX will be converted to JavaScript Calls!
	props.alert && <div className={`alert alert-${props.alert.type} alert-dismissible fade show`} role="alert">
		<strong>{capitalizeFirstCharOfType(props.alert.type)}</strong>: {props.alert.msg}
      	</div>
  )
}
