import React from "react";
import graph from "./graph.jfif";
import graph2 from "./graph2.png";

function Summary() {
  return (
    <div>
      <h1>Summary of React.js</h1>
      <h2>What is React.js?</h2>
      <p>
        React.js is a component based JavaScript library created by Facebook
        used for front-end development that is capable of creating fast and
        reactive webpages (1).
      </p>
      <h2>Popularity</h2>
      <p>
        In 2021, React.js is the most popular web framework in the world, used
        by 40.14% of professionals (2).
      </p>
      <img src={graph} alt="Graph.jpg" />
      <h2>Strengths</h2>
      <p>
        React is component based which means that you can easily create, reuse,
        and implement new peices of a webpage intuitively. This feature also
        makes react extremely scalable without running into too many issues.
      </p>
      <p>
        Since React.js is so popular, there is a huge supply of online tutorials
        and guides for beginners to get started. I was never left stuck with an
        issue for too long because of the amount of answers online relating to
        React.
      </p>
      <h2>Weaknesses</h2>
      <p>
        React.js does not have a steep learning curve relative to the power it
        has, but for a beginner, the learning curve is a mountain in comparison
        to the other frameworks taught in cps530.
      </p>
      <p>
        Since React is changing and advancing so fast, guides and tutorials
        online become irrelavent in the matter of 1 or 2 years. This can lead to
        using outdated or no longer working syntax in projects while following
        out of date guides.
      </p>
      <h2>Who uses React.js?</h2>
      <p>
        React.js is useful for almost any type of website that has a frontend.
        Here are some examples (3):
      </p>
      <ul>
        <li>Airbnb</li>
        <li>Dropbox</li>
        <li>BBC</li>
        <li>Facebook</li>
        <li>Imgur</li>
        <li>Instagram</li>
        <li>Netflix</li>
        <li>Reddit</li>
      </ul>
      <br />
      <hr />
      <br />
      <h1>Summary of Node.js</h1>
      <h2>What is Node.js?</h2>
      <p>
        Node.js is a backend and frontend development technology created in 2009
        which runs on the V8 JavaScript runtime engine. (4)
      </p>
      <h2>Popularity</h2>
      <p>
        Node.js is ranked first in terms of use by professional developers
        compared to other similar software (5).
      </p>
      <img src={graph2} alt="graph2.png" />
      <h2>Strengths</h2>
      Node.js is simple to learn, scalable, intuitive, and fast. Node.js also
      takes advantage of caching to store data, which makes it even faster (6).
      <h2>Weaknesses</h2>
      Node.js does not have many obvious weaknesses for a project of this size,
      but Node.js applications will have worse performance when faced with heavy
      computing tasks (7).
      <h2>Who uses Node.js?</h2>
      <p>Some examples of websites that use Node.js (8): </p>
      <ul>
        <li>LinkedIn</li>
        <li>Netflix</li>
        <li>Uber</li>
        <li>eBay</li>
        <li>PayPal</li>
        <li>Trello</li>
      </ul>
    </div>
  );
}

export default Summary;
