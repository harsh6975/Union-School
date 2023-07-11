import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./component/Home";
import Admission from "./component/Admission";
import About from "./component/About";

function App() {
  return (
    <Router>
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route exact path="/admission" element={<Admission />} />
        <Route exact path="/about-us" element={<About />} />
      </Routes>
    </Router>
  );
}

export default App;
