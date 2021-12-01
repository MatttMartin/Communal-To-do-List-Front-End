import React from "react";

function Installation() {
  return (
    <div>
      <h1>Installation</h1>
      <h2>1. Install Node.js</h2>
      <p>
        Follow the instructions on <a href="nodejs.org">Nodejs.org</a> to
        download.
      </p>
      <h2>2. Verify that Install was Successful</h2>
      <p>
        Open your command prompt and type "node -v". If a version is printed,
        then installation was successful.
      </p>
      <h2>3. Download HeidiSQL</h2>
      <p>
        Follow the download instructions on{" "}
        <a href="https://www.heidisql.com/download.php">
          https://www.heidisql.com/download.php
        </a>{" "}
        to download.
      </p>
    </div>
  );
}

export default Installation;
