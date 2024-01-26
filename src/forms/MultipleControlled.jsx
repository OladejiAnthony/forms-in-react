import React, {useState} from "react";

function MultipleControlled () {
  //const [name, setName] = useState("");
  //const [job, setJob] = useState("");
  const [person, setPerson] = useState({
    name: "",
    job: "", 
    company: ""
  });
  //console.log(person);

  //This function helps us handle multiple input field using the controlled input method
  const handleChange = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    setPerson({ ...person, [name]: value });
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    //console.log("submitted")
    const newUser = person;
    console.log(newUser);
    setPerson({ name: "", job: "", company: "" }); // clear person on submission
  }
 

  return (
    <div className="--bg-primary --mh-100vh">
      <h1 className="--text-light --text-center">Multiple Controlled Inputs</h1>
      <div className="--flex-center">
        <div className="--card --bg-light --width-500px --flex-center">
          <form onSubmit={handleSubmit} className="--form-control">
            <div>
              <label htmlFor="name">Name: </label>
              <input
                type="text"
                name="name"
                value={person.name}
                onChange={handleChange}
              />
            </div>
            <div>
              <label htmlFor="Job">Job: </label>
              <input
                type="text"
                name="job"
                value={person.job}
                onChange={handleChange}
              />
            </div>
            <div>
              <label htmlFor="company">Company: </label>
              <input
                type="text"
                name="company"
                value={person.company}
                onChange={handleChange}
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

export default MultipleControlled;

