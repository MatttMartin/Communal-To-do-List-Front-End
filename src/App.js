import "./App.css";
import { useEffect, useState } from "react";
import Axios from "axios";

function App() {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [due, setDue] = useState(0);

  const [itemsList, setItemsList] = useState([]);

  const [value, setValue] = useState("");

  const addItem = () => {
    Axios.post("https://termproject4.herokuapp.com/create", {
      title: title,
      description: description,
      due: due,
    }).then(() => {
      console.log("success");
      getItems();
    });
  };

  const getItems = () => {
    Axios.get("https://termproject4.herokuapp.com/listItems").then(
      (response) => {
        console.log(response);
        setItemsList(response.data);
      }
    );
  };

  useEffect(() => {
    getItems();
  }, []);

  return (
    <div className="App">
      <div>
        <label>Title: </label>
        <input
          type="text"
          onChange={(event) => {
            setTitle(event.target.value);
          }}
        />
        <label>Description: </label>
        <input
          type="text"
          onChange={(event) => {
            setDescription(event.target.value);
          }}
        />
        <label>Due: </label>
        <input
          type="date"
          onChange={(event) => {
            setDue(event.target.value);
          }}
        />
        <button onClick={addItem}>Add List Item</button>
      </div>
      <hr />
      <div>
        {itemsList.map((val, key) => {
          return (
            <div className="item">
              <b>{val.title}</b>
              <br />
              {val.description}
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default App;
