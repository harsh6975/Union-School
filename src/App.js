import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./component/Home";
import Admission from "./component/Admission";
import About from "./component/About";
import Facility from "./component/Facility";
import Academic from "./component/Academic";
import Gallery from "./component/Gallery";

function App() {
  return (
    <Router>
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route exact path="/admission" element={<Admission />} />
        <Route exact path="/about-us" element={<About />} />
        <Route exact path="/facilities" element={<Facility />} />
        <Route exact path="/academic" element={<Academic />} />
        <Route exact path="/gallery" element={<Gallery />} />
      </Routes>
    </Router>
  );
}

export default App;
