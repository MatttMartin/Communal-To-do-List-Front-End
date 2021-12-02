import React from "react";
import me from "./photos/me.jfif";

function Credits() {
  return (
    <div>
      <h1>Credits/References</h1>
      <h2>Group Members</h2>
      <div className="groupMember">
        <h4>Matthew Martin</h4>

        <b>Responsibilities: </b>
        <ul>
          <li>Design and creation of demo website</li>
          <li>
            Creation of Summary, Installation, Tutorial, Conclusion, and Credits
            pages.
          </li>
        </ul>

        <img style={{ width: 100, maxWidth: 100 }} src={me} alt="me.jfif" />
      </div>
      <h2>Works Cited</h2>
      <div style={{ textIndent: -36, paddingLeft: 36 }}>
        <p>
          Taha Sufiyan. “What Is React: Definition, Why ReactJS, Its Features
          and Installation.” <em>Simplilearn.com</em>, Simplilearn, 4 June 2020,
          www.simplilearn.com/tutorials/reactjs-tutorial/what-is-reactjs.
          Accessed 2 Dec. 2021. ‌
        </p>
        <p>
          Ambika C. “12 Reasons to Choose ReactJS for Your next Web Development
          Project in 2021.” <em>Medium</em>, Medium, 7 Oct. 2021,
          medium.com/@cambika280/12-reasons-to-choose-reactjs-for-your-next-web-development-project-in-2021-39ce2bc72e60.
          Accessed 2 Dec. 2021. ‌
        </p>
        <p>
          Coder Academy. “Top 32 Sites Built with ReactJS - Coder Academy -
          Medium.” <em>Medium</em>, Medium, 10 June 2016,
          medium.com/@coderacademy/32-sites-built-with-reactjs-172e3a4bed81.
          Accessed 2 Dec. 2021. ‌
        </p>
        <p>
          Priyesh Patel. “What Exactly Is Node.js?” <em>FreeCodeCamp.org</em>,
          freeCodeCamp.org, 18 Apr. 2018,
          www.freecodecamp.org/news/what-exactly-is-node-js-ae36e97449f5/.
          Accessed 2 Dec. 2021. ‌
        </p>
        <p>
          “Stack Overflow Developer Survey 2020.” <em>Stack Overflow</em>, 2020,
          insights.stackoverflow.com/survey/2020#technology-other-frameworks-libraries-and-tools-professional-developers3.
          Accessed 2 Dec. 2021.
        </p>
        <p>
          “Why Is Node.js Wildly Popular among Developers?”{" "}
          <em>Engineering Education (EngEd) Program</em>, Why is Node.js wildly
          popular among developers? | Engineering Education (EngEd) Program |
          Section, 2020,
          www.section.io/engineering-education/why-node-js-is-popular/. Accessed
          2 Dec. 2021. ‌
        </p>
        <p>
          Tejas Kaneriya. “Advantages {"&"} Disadvantages of Node.js : Why to
          Use Node.js?” <em>Simform Blog</em>, 2 June 2020,
          www.simform.com/blog/nodejs-advantages-disadvantages/. Accessed 2 Dec.
          2021. ‌
        </p>
        <p>
          “15 Companies That Use Node.js in 2021 Successfully.” <em>Usetrio</em>
          , 2021, trio.dev/blog/companies-use-node-js. Accessed 2 Dec. 2021. ‌
        </p>
      </div>
    </div>
  );
}

export default Credits;
