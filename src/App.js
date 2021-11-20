import "./App.css";
import { useEffect, useState } from "react";
import Axios from "axios";

function App() {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [due, setDue] = useState(0);

  const [itemsList, setItemsList] = useState([]);

  const addItem = () => {
    Axios.post("https://termproject4.herokuapp.com/create", {
      title: title,
      description: description,
      due: due,
    }).then(() => {
      console.log("success");
      getItems();
    });
    clearInputs();
  };

  const getItems = () => {
    Axios.get("https://termproject4.herokuapp.com/listItems").then(
      (response) => {
        //console.log(response);
        setItemsList(response.data);
      }
    );
  };

  const clearInputs = () => {
    setTitle("");
    setDescription("");
    setDue(0);
  };

  const deleteItem = (id) => {
    //console.log(id);
    Axios.delete(`https://termproject4.herokuapp.com/delete/${id}/`).then(
      (response) => {
        // this only runs on success
        console.log("RESPONSE FROM POST", response.data);
        getItems();
      },
      (err) => {
        // this only runs on error
        console.log("Error While Posting Data", err);
      }
    );
  };

  useEffect(() => {
    getItems();
  }, []);

  return (
    <div className="App">
      <div>
        <h1>Welcome to the communal to-do list! Add a list item!</h1>
        <label>Title: </label>
        <input
          type="text"
          value={title}
          onChange={(event) => {
            setTitle(event.target.value);
          }}
        />
        <label>Description: </label>
        <input
          type="text"
          value={description}
          onChange={(event) => {
            setDescription(event.target.value);
          }}
        />
        <label>Due: </label>
        <input
          type="date"
          value={due}
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
              <p>{val.description}</p>
              <p>Due: {val.due.slice(0, 10)}</p>
              <button
                className="deleteButton"
                onClick={() => {
                  deleteItem(val.id);
                }}
              >
                Delete
              </button>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default App;
