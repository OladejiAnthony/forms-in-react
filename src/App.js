import React from 'react';
import ControlledInputs from "./forms/ControlledInputs"
import UnControlledInputs from './forms/UncontrolledInput';
import MultipleControlled from './forms/MultipleControlled';


/*
**Form's in React:***
1. Controlled Input - 
  In controlled, you store your input field values into component state.
  The input value is read and set through the component state.
  We manipulate the input via the component state.
2. Uncontrolled Input -
  It stores its own input field value and you query the DOM using a "useRef()" hook to find 
  its current value when you need it. We majorly write plain javaScript here.
*/

//Uwhen you want to monitor what
function App(props) {
  return (
    <div className='App'>
      <ControlledInputs />
      <UnControlledInputs />
      <MultipleControlled />
    </div>
  );
}

export default App