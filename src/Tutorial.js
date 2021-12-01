import React from "react";
import fileStructure from "./fileStructure.png";
import creatingApp from "./creatingApp.png";

function Tutorial() {
  return (
    <div>
      <h1>
        Tutorial: Create a simple web-app with React.js, Node.js, and mySQL
      </h1>
      <h3>1. Create File Structure</h3>
      <p>
        Create a folder for your project, then create two sub-folders called
        "client" and "server".
      </p>
      <img src={fileStructure} alt="fileStructure.png" />
      <h3>2. Run create-react-app</h3>
      <p>
        In your cmd, navigate to the client folder and type "npx
        create-react-app ."
      </p>
      <img src={creatingApp} alt="creatingApp.png" />
    </div>
  );
}

export default Tutorial;
