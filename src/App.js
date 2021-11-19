import "./App.css";
import { useState } from "react";
import Axios from "axios";

function App() {
  const [name, setName] = useState("");
  const [age, setAge] = useState(0);

  const [employeeList, setEmployeeList] = useState([]);

  const addEmployee = () => {
    Axios.post("https://termproject4.herokuapp.com/create", {
      name: name,
      age: age,
    }).then(() => {
      console.log("success");
    });
  };

  const getEmployees = () => {
    Axios.get("https://termproject4.herokuapp.com/employees").then(
      (response) => {
        console.log(response);
        setEmployeeList(response.data);
      }
    );
  };

  return (
    <div className="App">
      <div>
        <label>Name: </label>
        <input
          type="text"
          onChange={(event) => {
            setName(event.target.value);
          }}
        />
        <label>Age: </label>
        <input
          type="number"
          onChange={(event) => {
            setAge(event.target.value);
          }}
        />
        <button onClick={addEmployee}>Add Person</button>
      </div>
      <hr />
      <div>
        <button onClick={getEmployees}>Show Employees</button>

        {employeeList.map((val, key) => {
          return <div>{val.name}</div>;
        })}
      </div>
    </div>
  );
}

export default App;
