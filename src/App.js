import "./App.css";
import TodoApp from "./TodoApp";
import Summary from "./Summary";
import Installation from "./Installation";
import Tutorial from "./Tutorial";
import Conclusion from "./Conclusion";
import Credits from "./Credits";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";

function App() {
  return (
    <Router>
      <h1>CPS 530 Term Project</h1>
      <h4>Matthew Martin</h4>
      <hr />
      <nav>
        <Link class="navLink" to="/Summary">
          Summary
        </Link>
        <Link class="navLink" to="/Installation">
          Installation
        </Link>
        <Link class="navLink" to="/Tutorial">
          Tutorial
        </Link>
        <Link class="navLink" to="/Demo">
          Demo Page
        </Link>
        <Link class="navLink" to="/Conclusion">
          Conclusion
        </Link>
        <Link class="navLink" to="/Credits">
          Credits/References
        </Link>
      </nav>
      <hr />

      <Routes>
        <Route path="/Summary" element={<Summary />} />
        <Route path="/Installation" element={<Installation />} />
        <Route path="/Tutorial" element={<Tutorial />} />
        <Route path="/Demo" element={<TodoApp />} />
        <Route path="/" element={<TodoApp />} />
        <Route path="/Conclusion" element={<Conclusion />} />
        <Route path="/Credits" element={<Credits />} />
      </Routes>
    </Router>
  );
}

export default App;
