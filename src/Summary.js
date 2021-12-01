import React from "react";
import graph from "./graph.jfif";

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
      <h2>Popularity</h2>
      <h2>Strengths</h2>
      <h2>Weaknesses</h2>
      <h2>Who uses Node.js?</h2>
    </div>
  );
}

export default Summary;
