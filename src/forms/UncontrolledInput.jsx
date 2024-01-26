import React, {useRef, useEffect} from "react";

//useRef () Hook - to access the value of our inout field uncontrolled input method
//1. it target DOM nodes/elements. 2. it preserves input field values during re-render

function UnControlledInputs () {
  const nameInputRef = useRef(null);
  const jobInputRef = useRef(null)
  //console.log(nameInputRef)  //console.log(nameInputRef.current)  

  const handleSubmit = (e) => {
    e.preventDefault();
    //console.log("submitted") 
    const enteredName = nameInputRef.current.value;
    const enteredJob = jobInputRef.current.value;
    console.log(enteredName, enteredJob);
  }

//implem
  useEffect(() => {
    nameInputRef.current.focus()
  },[])

  return (
    <div className="--bg-primary --mh-100vh">
      <h1 className="--text-light --text-center">UnControlled Inputs</h1>
      <div className="--flex-center">
        <div className="--card --bg-light --width-500px --flex-center">
          <form onSubmit={handleSubmit} className="--form-control">
            <div>
              <label htmlFor="name">Name: </label>
              <input
                type="text" name="name"
                ref={nameInputRef}
              />
            </div>
            <div>
              <label htmlFor="Job">Job: </label>
              <input
                type="text" name="job"
                ref={jobInputRef}
              />
            </div>
            <button type="submit" className="--btn --btn-block">
              Submit User
            </button>
          </form>
        </div>
      </div>
    </div>
  )
}
export default UnControlledInputs;
