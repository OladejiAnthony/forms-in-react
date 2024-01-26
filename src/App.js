import React from 'react';
import ControlledInputs from "./forms/ControlledInputs"


/*
**Form's in React:***
1. Controlled Input - 
  In controlled, you store your input field into component state.
  The input value is read and set through the component state.
  We manipulate the input via the component state.
2. Uncontrolled Input -
  It stores its own value and you query the DOM using a "useRef()" hook to find 
  its current value when you need it. We majorly write plain javaScript here.
*/

//Uwhen you want to monitor what
function App(props) {
  return (
    <div className='App'>
      <ControlledInputs />
      
    </div>
  );
}

export default App