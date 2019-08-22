import React from "react";

export function Input(props) {
    return (
            <React.Fragment> 
        {/* writing ...props will add new props to existing props whereas props will just refresh one prop */}
            <input className="from control" {...props} style={{
                width: 500,
                height: 30,
                marginRight: 30
                }}/>
            </React.Fragment>
    )
};

export function FormBtn(props){
    return (
        <button {...props} style={{ 
            padding: 10,
            background: "blue",
            color: "white",
            border: 0,
            borderRadius: 5,
            outline: 0
        }}
        className="btn btn-success">
        {/* children is the data (text for the button in this context) that is passed in to this component throught the state in the class. */}
          {props.children}
        </button>
      );
}
