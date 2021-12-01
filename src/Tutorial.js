import React from "react";
import fileStructure from "./photos/fileStructure.png";
import creatingApp from "./photos/creatingApp.png";

function Tutorial() {
  return (
    <div>
      <h1>
        Tutorial: Create a simple web-app with React.js, Node.js, and mySQL
      </h1>
      <h2>Note: this tutorial is for a simplified version of the Demo</h2>
      <h3>1. Create File Structure</h3>
      <p>
        Create a folder for your project, then create two sub-folders called
        "client" and "server".
      </p>
      <img
        style={{ maxWidth: 200 }}
        src={fileStructure}
        alt="fileStructure.png"
      />
      <h3>2. Set up client Folder</h3>
      <p>
        In your cmd, navigate to the client folder and type "npx
        create-react-app ."
      </p>
      <p>Next in the client folder, run "npm install axios".</p>
      <img style={{ maxWidth: 750 }} src={creatingApp} alt="creatingApp.png" />
      <p>This will generate all of the files we need to get started.</p>
      <h3>3. Set-up Server Folder</h3>
      <p>
        In your cmd, navigate to the server folder, then type the command "npm
        init". This will prompt a bunch of quesitons, just press enter past each
        one.
      </p>
      <p>After that, type the command "npm install mysql express".</p>
      <p>Finally, create a file called "index.js" in the server folder.</p>
      <h3>4. Set up mySQL database</h3>
      <p>
        Create an account with{" "}
        <a href="https://remotemysql.com/">https://remotemysql.com/</a>. Then
        under the "Databases" section, create a new mySQL database and take note
        of the user, host, password, and database name.
      </p>
      <p>
        Open HeidiSQL and create a new connection to the database using the info
        you just took note of. Next Create a new table called listItems with a
        column for id, and one for title.
      </p>
      <h3>5. Add code to server</h3>
      <p>
        Add the following code to server {">"} index.js, and fill in the noted
        database information (commented for explanations).
      </p>
      <div className="code">
        <pre>
          {`
          const express = require("express");
          const app = express();
          const mysql = require("mysql");
          const cors = require("cors");

          app.use(cors());
          app.use(express.json());

          //fill in your info here:
          const dbConfig = {
            user: "",
            host: "",
            password: "",
            database: "",
          };
          
          //reconnects lost connections from database
          var connection = mysql.createConnection(dbConfig);
          function handleDisconnect(myconnection) {
            myconnection.on("error", function (err) {
              console.log("Re-connecting lost connection");
              connection.destroy();
              connection = mysql.createConnection(dbConfig);
              handleDisconnect(connection);
              connection.connect();
            });
          }

          handleDisconnect(connection);
          
          //this handles the request from the server to insert an item into the database
          app.post("/create", (req, res) => {
            const title = req.body.title;

            connection.query(
              "INSERT INTO listitems (title) VALUES (?)",
              [title],
              (err, result) => {
                if (err) {
                  console.log(err);
                } else {
                  res.send("Values Inserted");
                }
              }
            );
          });

          //this handles the request from the server to select all of the rows from the database
          app.get("/listItems", (req, res) => {
            connection.query("SELECT * FROM listitems", (err, result) => {
              if (err) {
                console.log(err);
              } else {
                res.send(result);
              }
            });
          });

          app.listen(process.env.PORT || 3001, () => {
            console.log("your server is running on port 3001");
          });`}
        </pre>
      </div>
      <h3>6. Add code to App.js</h3>
      <p>
        Add the following code to client {">"} src {">"} App.js (commented for
        explanations).
      </p>
      <div className="code">
        <pre>
          {`
          import "./App.css";
          import { useState } from "react";
          import Axios from "axios";

          function App() {
            const [title, setTitle] = useState("");
            const [itemsList, setItemsList] = useState([]);

            //This function sends a post request to our server with our title. the server will add the new row to the database
            const addItem = () => {
              Axios.post("http://localhost:3001/create", {
                title: title,
              }).then(() => {
                console.log("success");
                getItems();
              });
            };

            //This function sends a get request to our server, then sets the itemsList state to the response.
            const getItems = () => {
              Axios.get("http://localhost:3001/listItems").then((response) => {
                setItemsList(response.data);
              });
            };

            return (
              <div className="App">
                <div>
                  <h1>Add an item to the database</h1>
                  <label>Title: </label>
                  <input
                    type="text"
                    value={title}
                    onChange={(event) => {
                      setTitle(event.target.value); //the state title will be updated to whatever is typed
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
                      </div>
                    );
                  })}
                </div>
              </div>
            );
          }

          export default App;
          `}
        </pre>
      </div>
      <h3>7. Add Styling</h3>
      <p>
        Style sheets work the same way in react as they do in a regular website,
        except for the way we import it (see line 1 of app.js). Add the
        following code to client {">"} src {">"} App.css (commented for
        explanations).
      </p>
      <div className="code">
        <pre>
          {`
          input {
            width: 100%;
            padding: 12px 20px;
            margin: 8px 0;
            display: inline-block;
            border: 1px solid #ccc;
            border-radius: 4px;
            box-sizing: border-box;
          }
          
          button {
            width: 100%;
            background-color: #4caf50;
            color: white;
            padding: 14px 20px;
            margin: 8px 0;
            border: none;
            border-radius: 4px;
            cursor: pointer;
          }
          
          button:hover {
            background-color: #45a049;
          }
          
          div {
            border-radius: 5px;
            background-color: #f2f2f2;
            padding: 20px;
          }
          
          .item {
            border: 1px solid black;
            margin-top: 5px;
            background-color: aliceblue;
            width: 100%;
          }
          
          `}
        </pre>
      </div>
      <h3>8. Run the Website!</h3>
      <p>
        In your cmd, navigate to the client folder, then run the command "npm
        start". Next navigate to your server folder, and run the command "node
        index.js". This should open a browser window with you fully functioning
        full stack application!
      </p>
      <h3>9. Adding images</h3>
      <p>
        As an example of adding images to this react application, let's add this
        image from earlier in the tutorial:
      </p>
      <img
        style={{ maxWidth: 200 }}
        src={fileStructure}
        alt="fileStructure.png"
      />
      <p>
        Save the above image as "fileStructure" to a folder called "photos" in
        client {">"} src. Next import the photo into App.js so that the imports
        now look like this:{" "}
      </p>
      <div className="code">
        <pre>
          {`
            import "./App.css";
            import { useState } from "react";
            import Axios from "axios";
            import fileStructure from "./photos/fileStructure.png";
          `}
        </pre>
      </div>
      <p>
        Next lets just add the photo above the heading in App.js so that the top
        of the return looks something like this:
      </p>
      <div className="code">
        <pre>
          {`
              return (
                <div className="App">
                  <div>
                    <img src={fileStructure} alt="fileStructure.png" /> 
                    <h1>Add an item to the database</h1>
          `}
        </pre>
      </div>
    </div>
  );
}

export default Tutorial;
